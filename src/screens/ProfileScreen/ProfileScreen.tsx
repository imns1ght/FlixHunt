import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { useToast } from 'react-native-toast-notifications'
import { useTranslation } from 'react-i18next'

import {
  CustomActivityIndicator,
  CustomButton,
  CustomText,
  ListButton,
  Section,
} from '~/components'
import { ListButtonType } from '~/components/Buttons/ListButton/ListButton'
import { AccountType } from '~/models'
import { StackNavigationProps, TabNavigationProps } from '~/navigation'
import { API, Authentication } from '~/services'
import { Header } from './Header'
import styles from './ProfileScreen.styles'

const ProfileScreen = () => {
  const { t } = useTranslation();
  const toast = useToast()
  const stackNavigation = useNavigation<StackNavigationProps>()
  const tabNavigation = useNavigation<TabNavigationProps>()
  const [loading, setLoading] = React.useState(true)
  const [accountData, setAccountData] = React.useState<AccountType | undefined>()
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  const goToAuth = React.useCallback(() => {
    stackNavigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Auth' }],
      })
    )
  }, [stackNavigation])

  const logout = () => {
    if (Authentication.removeUserCredentials()) goToAuth()
  }

  const loadAccountData = React.useCallback(async () => {
    const isUserLogged = await Authentication.isUserLogged()

    try {
      if (isUserLogged) {
        const sessionId = await Authentication.getSessionId()
        const accountResponse = await API.getAccountDetails(sessionId)
        setAccountData(accountResponse)
      }
    } catch (e) {
      console.error(e)
      toast.show(e.message as string, {
        type: 'danger',
      })
    } finally {
      setLoading(false)
      setIsAuthenticated(isUserLogged)
    }
  }, [toast])

  React.useEffect(() => {
    loadAccountData()
  }, [loadAccountData])

  const menuItems: ListButtonType[] = React.useMemo(() => {
    const disabled = !isAuthenticated
    const activateDisabledStyle = true
    const onPressUnavailable = () => toast.show(t('featureUnavailable'))

    return [
      {
        title: t('favorites'),
        onPress: () => tabNavigation.navigate('Favorites'),
        iconName: 'heart-outline',
        disabled,
      },
      {
        title: t('lists'),
        onPress: onPressUnavailable,
        iconName: 'view-list-outline',
        activateDisabledStyle,
        disabled,
      },
      {
        title: t('watchlist'),
        onPress: onPressUnavailable,
        iconName: 'file-eye-outline',
        activateDisabledStyle,
        disabled,
      },
      {
        title: t('reviews'),
        onPress: onPressUnavailable,
        iconName: 'forum-outline',
        activateDisabledStyle,
        disabled,
      },
      {
        title: t('ratings'),
        onPress: onPressUnavailable,
        iconName: 'star-outline',
        activateDisabledStyle,
        disabled,
      },
      {
        title: t('recentlyVisited'),
        onPress: onPressUnavailable,
        iconName: 'history',
        activateDisabledStyle,
        disabled,
      },
      {
        title: t('about'),
        onPress: () => stackNavigation.navigate('Info'),
        iconName: 'information-outline',
      },
    ]
  }, [isAuthenticated, stackNavigation, tabNavigation, toast])

  if (loading) return <CustomActivityIndicator size='large' style={{ flexGrow: 1 }} />

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Section centered>
        <View style={styles.mainContainer}>
          <Header isAuthenticated={isAuthenticated} accountData={accountData} />
          {!isAuthenticated && (
            <CustomText type='paragraph'>{t('auth.description')}</CustomText>
          )}
          <View style={styles.listContainer}>
            {menuItems.map(item => (
              <ListButton
                key={item.title}
                title={item.title}
                onPress={item.onPress}
                iconName={item.iconName}
                disabled={item.disabled}
                activateDisabledStyle={item.activateDisabledStyle}
              />
            ))}
            {isAuthenticated && (
              <CustomButton title={t('logout')} onPress={logout} transparent />
            )}
          </View>
        </View>
      </Section>
    </SafeAreaView>
  )
}

export default ProfileScreen
