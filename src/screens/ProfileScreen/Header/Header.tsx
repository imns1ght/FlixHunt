import { CommonActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import FastImage from 'react-native-fast-image'
import InAppBrowser from 'react-native-inappbrowser-reborn'
import Icon from 'react-native-vector-icons/Ionicons'
import { CustomButton, CustomText } from '~/components'
import { translate } from '~/locales'
import { AccountType } from '~/models'
import { StackNavigationProps, inAppBrowserDefaultOptions } from '~/navigation'
import { colors } from '~/styles'
import { getImagePath } from '~/utils'
import styles from './Header.styles'

const ProfileScreenHeader = ({
  isAuthenticated,
  accountData,
}: {
  isAuthenticated: boolean
  accountData?: AccountType
}) => {
  const navigation = useNavigation<StackNavigationProps>()

  const editProfile = React.useCallback(async () => {
    await InAppBrowser.isAvailable()
    const response = await InAppBrowser.open(
      'https://www.themoviedb.org/settings/profile',
      inAppBrowserDefaultOptions
    )
    if (response) navigation.replace('BottomBar', { screen: 'Profile' })
  }, [navigation])

  const goToAuth = React.useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Auth' }],
      })
    )
  }, [navigation])

  const ActionButton = React.useCallback(
    ({ title, onPress }: { title: string; onPress: () => void }) => (
      <CustomButton title={title} onPress={onPress} style={styles.actionButton} />
    ),
    []
  )

  const GuestProfilePicture = React.useCallback(
    () => <Icon name='person' size={100} color={colors.gray} />,
    []
  )

  const LoggedUser = React.useCallback(
    () => (
      <>
        {accountData?.avatar.tmdb.avatar_path ? (
          <FastImage
            source={{ uri: getImagePath(accountData.avatar.tmdb.avatar_path, 'original') }}
            style={styles.profilePicture}
          />
        ) : (
          <GuestProfilePicture />
        )}
        <View style={styles.actionContainer}>
          {accountData?.name && <CustomText type='title'>{accountData.name}</CustomText>}
          <CustomText type='paragraph'>@{accountData?.username}</CustomText>
          <ActionButton title={translate('editProfile')} onPress={editProfile} />
        </View>
      </>
    ),
    [
      ActionButton,
      GuestProfilePicture,
      accountData?.avatar.tmdb.avatar_path,
      accountData?.name,
      accountData?.username,
      editProfile,
    ]
  )

  const GuestUser = React.useCallback(
    () => (
      <>
        <GuestProfilePicture />
        <View style={styles.actionContainer}>
          <CustomText type='title'>{translate('guest')}</CustomText>
          <ActionButton title={translate('login')} onPress={goToAuth} />
        </View>
      </>
    ),
    [ActionButton, GuestProfilePicture, goToAuth]
  )

  return <View style={styles.container}>{isAuthenticated ? <LoggedUser /> : <GuestUser />}</View>
}

export default ProfileScreenHeader
