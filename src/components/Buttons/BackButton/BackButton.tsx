import React from 'react'
import { IconButton } from '~/components'
import { theme } from '~/styles'
import { CommonActions, useNavigation } from '@react-navigation/native'

const BackButton = () => {
  const iconSize = 26
  const navigation = useNavigation()

  const navigateToHome = React.useCallback(() => {
    return navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'BottomBar' }],
      })
    )
  }, [navigation])

  return (
    <IconButton
      name='keyboard-backspace'
      type='Material'
      onPress={navigation.goBack}
      onLongPress={navigateToHome}
      size={iconSize}
      color={theme.colors.icon}
    />
  )
}

export default BackButton
