import React from 'react'
import { Button, Linking, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CommonActions } from '@react-navigation/native'

import { CustomActivityIndicator, Section } from '~/components'
import { StackNavigationProps, inAppBrowserDefaultOptions, linkingConfig } from '~/navigation'
import api from '~/services/api'
import SecureStorage from '~/services/storage'
import Authentication from '~/services/authentication'
import InAppBrowser from 'react-native-inappbrowser-reborn'
import styles from './AuthScreen.styles'

const { prefixes, config } = linkingConfig
const deeplink = prefixes[0] + config.screens.Authenticate

const AuthScreen = () => {
  const [loading, setLoading] = React.useState(true)
  const navigation = useNavigation<StackNavigationProps>()

  const navigateToHome = React.useCallback(() => {
    return navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'BottomBar' }],
      })
    )
  }, [navigation])

  const guestLogin = React.useCallback(async () => {
    const { guest_session_id } = await api.createGuestSession()
    await SecureStorage.setItem('guest_session_id', guest_session_id)
    navigateToHome()
  }, [navigateToHome])

  const tmdbLogin = async () => {
    try {
      const { request_token } = await api.createRequestToken()
      const authURL = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${deeplink}`

      const response = await InAppBrowser.openAuth(authURL, deeplink, inAppBrowserDefaultOptions)
      if (response.type === 'success' && response.url) {
        Linking.openURL(response.url)
        const { session_id } = await api.createSession(request_token)
        const { id: account_id } = await api.getAccountDetails(session_id)
        await Authentication.saveCredentials(session_id, account_id)
        navigateToHome()
      }
    } catch (e) {
      console.error(e)
    }
  }

  const checkAuthStatus = React.useCallback(async () => {
    const alreadyAuthenticated = await Authentication.isUserLogged()

    if (alreadyAuthenticated) {
      navigateToHome()
    } else {
      const isBrowserAvailable = await InAppBrowser.isAvailable()

      if (isBrowserAvailable) setLoading(false) // Procede to login
      else guestLogin()
    }
  }, [guestLogin, navigateToHome])

  React.useEffect(() => {
    checkAuthStatus()
  }, [checkAuthStatus])

  return loading ? (
    <View style={styles.loadingContainer}>
      <CustomActivityIndicator size='large' />
    </View>
  ) : (
    <Section>
      <Button title='Join using your TMDb account' onPress={tmdbLogin} />
      <Button title='Continue without account' onPress={guestLogin} />
    </Section>
  )
}

export default AuthScreen
