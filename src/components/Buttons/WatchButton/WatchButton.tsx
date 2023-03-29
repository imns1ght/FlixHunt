import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import InAppBrowser from 'react-native-inappbrowser-reborn'

import styles from './WatchButton.styles'
import { CustomText } from '~/components'
import { translate } from '~/locales'
import { inAppBrowserDefaultOptions } from '~/navigation'

const WatchButton = ({ linkRedirect }: { linkRedirect?: string }) => {
  const isAvailable = !!linkRedirect

  return (
    <TouchableOpacity
      onPress={() => {
        if (isAvailable) {
          InAppBrowser.open(linkRedirect, inAppBrowserDefaultOptions)
        }
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
