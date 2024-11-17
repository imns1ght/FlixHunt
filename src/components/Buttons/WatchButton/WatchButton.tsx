import React from 'react'
import InAppBrowser from 'react-native-inappbrowser-reborn'

import { CustomButton } from '~/components'
import { inAppBrowserDefaultOptions } from '~/navigation'
import styles from './WatchButton.styles'
import { useTranslation } from 'react-i18next'

const WatchButton = ({ linkRedirect }: { linkRedirect?: string }) => {
  const { t } = useTranslation()
  const isAvailable = !!linkRedirect

  return (
    <CustomButton
      onPress={() => {
        if (isAvailable) InAppBrowser.open(linkRedirect, inAppBrowserDefaultOptions)
      }}
      title={t(isAvailable ? 'watch' : 'watchNotAvailable')}
      style={styles.button}
      disabled={!isAvailable}
    />
  )
}

export default WatchButton
