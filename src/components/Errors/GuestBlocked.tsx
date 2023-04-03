import { CommonActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { translate } from '~/locales'
import { StackNavigationProps } from '~/navigation'
import DefaultTemplate from './DefaultTemplate'

const GuestBlocked = () => {
  const navigation = useNavigation<StackNavigationProps>()
  const goToAuth = React.useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Auth' }],
      })
    )
  }, [navigation])

  return (
    <DefaultTemplate
      iconName='account-lock'
      message={translate('errors.guestblocked')}
      actionTitle={translate('login')}
      action={goToAuth}
    />
  )
}

export default GuestBlocked
