import React from 'react'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Section } from '~/components'
import { StackNavigationProps } from '~/navigation'
import api from '~/services/api'
import SecureStorage from '~/services/storage'
import Authentication from '~/services/authentication'

const AuthScreen = () => {
  const navigation = useNavigation<StackNavigationProps>()

  const navigateToHome = React.useCallback(() => navigation.replace('BottomBar'), [navigation])

  const guestLogin = async () => {
    const { guest_session_id } = await api.createGuestSession()
    await SecureStorage.setItem('guest_session_id', guest_session_id)
    navigateToHome()
  }
  const tmdbLogin = () => navigation.navigate('Login')

  const alreadyAuthenticated = React.useCallback(async () => {
    const alreadyAuthenticated = await Authentication.isUserLogged()
    if (alreadyAuthenticated) navigateToHome()
  }, [navigateToHome])

  React.useEffect(() => {
    alreadyAuthenticated()
  }, [alreadyAuthenticated])

  return (
    <Section title='AuthScreen'>
      <Button title='Join using your TMDb account' onPress={tmdbLogin} />
      <Button title='Continue without account' onPress={guestLogin} />
    </Section>
  )
}

export default AuthScreen
