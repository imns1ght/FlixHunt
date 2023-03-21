import React from 'react'
import { IconButton } from '~/components'
import { theme } from '~/styles'
import { useNavigation } from '@react-navigation/native'

const BackButton = () => {
  const iconSize = 25
  const navigation = useNavigation()

  return (
    <IconButton
      name='keyboard-backspace'
      type='Material'
      onPress={navigation.goBack}
      size={iconSize}
      color={theme.colors.icon}
    />
  )
}

export default BackButton
