import React from 'react'
import { ImageBackground, Linking, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CommonActions } from '@react-navigation/native'

import { CustomActivityIndicator, CustomButton, CustomText, Section } from '~/components'
import { StackNavigationProps, inAppBrowserDefaultOptions, linkingConfig } from '~/navigation'
import api from '~/services/api'
import SecureStorage from '~/services/storage'
import Authentication from '~/services/authentication'
import InAppBrowser from 'react-native-inappbrowser-reborn'
import styles from './AuthScreen.styles'
import { useToast } from 'react-native-toast-notifications'
import { translate } from '~/locales'

const { prefixes, config } = linkingConfig
const deeplink = prefixes[0] + config.screens.Authenticate

const AuthScreen = () => {
  const [generalLoading, setGeneralLoading] = React.useState(true)
  const [loginLoading, setLoginLoading] = React.useState(false)

  const toast = useToast()
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
    try {
      setLoginLoading(true)
      const { guest_session_id } = await api.createGuestSession()
      await SecureStorage.setItem('guest_session_id', guest_session_id)
      navigateToHome()
    } catch ({ message }) {
      console.error(message)
      toast.show(message as string, {
        type: 'danger',
      })
    } finally {
      setLoginLoading(false)
    }
  }, [navigateToHome, toast])

  const tmdbLogin = async () => {
    try {
      setLoginLoading(true)
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
    } catch ({ message }) {
      console.error(message)
      toast.show(message as string, {
        type: 'danger',
      })
    } finally {
      setLoginLoading(false)
    }
  }

  const checkAuthStatus = React.useCallback(async () => {
    const alreadyAuthenticated = await Authentication.isUserLogged()

    if (alreadyAuthenticated) {
      navigateToHome()
    } else {
      const isBrowserAvailable = await InAppBrowser.isAvailable()
      if (isBrowserAvailable) setGeneralLoading(false) // Procede to login
      else guestLogin()
    }
  }, [guestLogin, navigateToHome])

  React.useEffect(() => {
    checkAuthStatus()
  }, [checkAuthStatus])

  if (generalLoading)
    return (
      <View style={styles.loadingContainer}>
        <CustomActivityIndicator size='large' />
      </View>
    )

  return (
    <ImageBackground
      source={require('~/assets/login-background.jpg')}
      style={styles.imageBackground}
      resizeMode='cover'
    >
      <Section>
        <View>
          <CustomText type='title' style={styles.title}>
            {translate('auth.title')}
          </CustomText>
          <CustomText type='subtitle' style={styles.subtitle}>
            {translate('auth.subtitle')}
          </CustomText>
        </View>
        <View style={styles.buttonContainer}>
          {loginLoading ? (
            <CustomActivityIndicator size='large' />
          ) : (
            <>
              <CustomButton
                title={translate('auth.tmdbLogin')}
                onPress={tmdbLogin}
                type='rounded'
              />
              <CustomText type='link' onPress={guestLogin} style={styles.guestButton}>
                {translate('auth.guestLogin')}
              </CustomText>
            </>
          )}
        </View>
        <View>
          <CustomText type='paragraph' style={styles.description}>
            {translate('auth.description')}
          </CustomText>
          <CustomText type='paragraph' style={styles.disclaimer}>
            {translate('tmdbDisclaimer')}
          </CustomText>
        </View>
      </Section>
    </ImageBackground>
  )
}

export default AuthScreen
