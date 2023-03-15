import { Linking, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'
import styles from './WatchButton.styles'
import { CustomText } from '~/components'
import { translate } from '~/locales'

const WatchButton = ({ linkRedirect }: { linkRedirect?: string }) => {
  const isAvailable = !!linkRedirect

  return (
    <TouchableOpacity
      onPress={() => {
        if (isAvailable) Linking.openURL(linkRedirect)
      }}
      style={isAvailable ? styles.container : { ...styles.container, ...styles.containerDisabled }}
      disabled={!isAvailable}
    >
      <CustomText type='button'>
        {translate(isAvailable ? 'watch' : 'watchNotAvailable')}
      </CustomText>
      {isAvailable && <Icon name='external-link' size={14} style={styles.icon} />}
    </TouchableOpacity>
  )
}

export default WatchButton
