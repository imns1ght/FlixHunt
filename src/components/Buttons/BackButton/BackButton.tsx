import React from 'react'
import { IconButton } from '~/components'
import { colors } from '~/styles'
import { useNavigation } from '@react-navigation/native'

const BackButton = () => {
  const iconSize = 25
  const iconColor = colors.white
  const navigation = useNavigation()

  return (
    <IconButton
      name='keyboard-backspace'
      type='Material'
      onPress={navigation.goBack}
      size={iconSize}
      color={iconColor}
    />
  )
}

export default BackButton
