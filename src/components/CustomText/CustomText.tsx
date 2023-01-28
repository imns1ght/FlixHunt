import { Text, TextProps, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './CustomText.styles'

type Props = TextProps & {
  type: 'title' | 'subtitle' | 'paragraph' | 'link' | 'button'
}

const CustomText = ({ children, type, numberOfLines, onPress }: Props) => {
  const isLink = type === 'link'

  const TextComponent = () => (
    <Text style={styles[type]} numberOfLines={numberOfLines}>
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
