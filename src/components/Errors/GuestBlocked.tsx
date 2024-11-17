import React from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '~/navigation'
import DefaultTemplate from './DefaultTemplate'
import { useTranslation } from 'react-i18next'

const GuestBlocked = () => {
  const { t } = useTranslation();
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
      message={t('errors.guestblocked')}
      actionTitle={t('login')}
      action={goToAuth}
    />
  )
}

export default GuestBlocked
