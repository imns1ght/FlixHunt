import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './TopBar.styles'

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Movie Browser</Text>
      <Image source={require('~/assets/logo.png')} style={{ width: 40, height: 40 }} />
    </View>
  )
}

export default TopBar
