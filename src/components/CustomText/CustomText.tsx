import { StyleProp, Text, TextProps, TextStyle, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './CustomText.styles'

type Props = TextProps & {
  type: 'title' | 'subtitle' | 'paragraph' | 'link' | 'button'
  bold?: boolean
}

const CustomText = ({ children, type, numberOfLines, onPress, bold = false }: Props) => {
  const isLink = type === 'link'
  const styleByType = styles[type]
  const customStyle = (
    bold ? { ...styleByType, fontWeight: 'bold' } : styleByType
  ) as StyleProp<TextStyle>

  const TextComponent = () => (
    <Text style={customStyle} numberOfLines={numberOfLines}>
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
