import React from 'react'
import { Button, Linking, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Section } from '~/components'
import { StackNavigationProps } from '~/navigation'
import api from '~/services/api'
import Authentication from '~/services/authentication'
import { colors, theme } from '~/styles'

const AUTH_DEEPLINK = 'flixhunt://login'

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProps>()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const navigateToHome = React.useCallback(() => navigation.replace('BottomBar'), [navigation])

  const registerAccount = () => {
    const authURL = `https://www.themoviedb.org/signup?redirect_to=${AUTH_DEEPLINK}`
    Linking.openURL(authURL)
  }

  const resetPassword = () => {
    const resetPasswordURL = `https://www.themoviedb.org/reset-password?redirect_to=${AUTH_DEEPLINK}`
    Linking.openURL(resetPasswordURL)
  }

  const tmdbLogin = async () => {
    try {
      const { request_token } = await api.createRequestToken()

      await api.createSessionWithLogin(username, password, request_token)
      const { session_id } = await api.createSession(request_token)
      const { id: account_id } = await api.getAccountDetails(session_id)
      await Authentication.saveCredentials(session_id, account_id)
      navigateToHome()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Section title='LoginScreen'>
      <TextInput
        autoFocus
        value={username}
        onChangeText={setUsername}
        placeholder={'Username'}
        autoComplete='username'
        style={styles.textInput}
        placeholderTextColor={styles.placeholder.color}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={'Password'}
        autoComplete='password'
        style={styles.textInput}
        placeholderTextColor={styles.placeholder.color}
        secureTextEntry
      />
      <Button title='Login' onPress={tmdbLogin} />
      <Button title='Forgot password?' onPress={resetPassword} />
      <Button title="Don't have an account? Register!" onPress={registerAccount} />
    </Section>
  )
}

const styles = {
  textInput: {
    backgroundColor: colors.black,
    color: theme.colors.text,
  },
  placeholder: {
    color: colors.gray,
  },
}

export default LoginScreen
