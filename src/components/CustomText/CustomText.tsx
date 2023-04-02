import { StyleProp, Text, TextProps, TextStyle, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './CustomText.styles'

type Props = TextProps & {
  type: 'title' | 'subtitle' | 'paragraph' | 'link' | 'button'
  bold?: boolean
  centered?: boolean
}

const CustomText = ({
  children,
  type,
  numberOfLines,
  onPress,
  bold = false,
  style,
  centered,
}: Props) => {
  const isLink = type === 'link'
  const styleByType: StyleProp<TextStyle> = [styles[type]]

  if (bold) styleByType.push(styles.bold)
  if (centered) styleByType.push(styles.centered)
  if (style) styleByType.push(style)

  const TextComponent = () => (
    <Text style={styleByType} numberOfLines={numberOfLines}>
      {children}
    </Text>
  )

  return isLink ? (
    <TouchableOpacity onPress={onPress}>
      <TextComponent />
    </TouchableOpacity>
  ) : (
    <TextComponent />
  )
}

export default CustomText
