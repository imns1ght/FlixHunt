import React from 'react'
import { Text, View } from 'react-native'
import styles from './Section.styles'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  )
}

export default Section
