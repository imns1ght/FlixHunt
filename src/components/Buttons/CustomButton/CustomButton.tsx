import React from 'react'
import { TouchableOpacity } from 'react-native'
import { CustomText } from '~/components'
import styles from './CustomButton.styles'

const CustomButton = ({
  title,
  disabled,
  onPress,
  type = 'regular',
}: {
  title: string
  disabled?: boolean
  onPress: () => unknown
  type?: 'rounded' | 'regular'
}) => {
  const containerRegularStyle = disabled
    ? { ...styles.container, ...styles.containerDisabled }
    : styles.container
  const containerTypeStyle =
    type === 'rounded'
      ? { ...containerRegularStyle, ...styles.containerRounded }
      : containerRegularStyle

  return (
    <TouchableOpacity onPress={onPress} style={containerTypeStyle} disabled={disabled}>
      <CustomText type='button'>{title}</CustomText>
    </TouchableOpacity>
  )
}

export default CustomButton
