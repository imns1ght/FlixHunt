import React from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { CustomText } from '~/components'
import styles from './CustomButton.styles'

const CustomButton = ({
  title,
  disabled,
  onPress,
  type = 'regular',
  style,
  transparent = false,
}: {
  title: string
  disabled?: boolean
  onPress: () => unknown
  type?: 'rounded' | 'regular'
  style?: ViewStyle
  transparent?: boolean
}) => {
  const containerStyle: ViewStyle[] = [styles.container]

  if (disabled) containerStyle.push(styles.containerDisabled)
  if (type === 'rounded') containerStyle.push(styles.containerRounded)
  if (transparent) containerStyle.push(styles.containerTransparent)
  if (style) containerStyle.push(style)

  return (
    <TouchableOpacity onPress={onPress} style={containerStyle} disabled={disabled}>
      <CustomText type='button'>{title}</CustomText>
    </TouchableOpacity>
  )
}

export default CustomButton
