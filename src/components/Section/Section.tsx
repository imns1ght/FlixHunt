import React from 'react'
import { Text, View } from 'react-native'
import styles from './Section.styles'

const Section = ({
  title,
  removeMargin = false,
  children,
}: {
  title: string
  removeMargin?: boolean
  children: React.ReactNode
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={removeMargin ? styles.contentWithoutMargin : styles.content}>{children}</View>
    </View>
  )
}

export default Section
