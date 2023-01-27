import { Linking, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'
import styles from './WatchButton.styles'

const WatchButton = ({ linkRedirect }: { linkRedirect: string }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(linkRedirect)
      }}
      style={styles.container}
    >
      <Text style={styles.text}>Watch</Text>
      <Icon name='external-link' size={16} style={styles.icon} />
    </TouchableOpacity>
  )
}

export default WatchButton
