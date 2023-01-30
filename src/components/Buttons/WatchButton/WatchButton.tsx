import { Linking, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'
import styles from './WatchButton.styles'
import { CustomText } from '~/components'
import { translate } from '~/locales'

const WatchButton = ({ linkRedirect }: { linkRedirect: string }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(linkRedirect)
      }}
      style={styles.container}
    >
      <CustomText type='button'>{translate('watch')}</CustomText>
      <Icon name='external-link' size={14} style={styles.icon} />
    </TouchableOpacity>
  )
}

export default WatchButton
