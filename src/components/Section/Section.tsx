import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './Section.styles'

const Section = ({
  title,
  removeMargin = false,
  children,
}: {
  title?: string
  removeMargin?: boolean
  children: React.ReactNode
}) => {
  return (
    <ScrollView style={styles.container}>
      {!!title && <Text style={styles.title}>{title}</Text>}
      <View style={removeMargin ? styles.contentWithoutMargin : styles.content}>{children}</View>
    </ScrollView>
  )
}

export default Section
