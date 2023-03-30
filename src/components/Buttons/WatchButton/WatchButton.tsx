import React from 'react'
import InAppBrowser from 'react-native-inappbrowser-reborn'

import { CustomButton } from '~/components'
import { translate } from '~/locales'
import { inAppBrowserDefaultOptions } from '~/navigation'

const WatchButton = ({ linkRedirect }: { linkRedirect?: string }) => {
  const isAvailable = !!linkRedirect

  return (
    <CustomButton
      onPress={() => {
        if (isAvailable) InAppBrowser.open(linkRedirect, inAppBrowserDefaultOptions)
      }}
      title={translate(isAvailable ? 'watch' : 'watchNotAvailable')}
      disabled={!isAvailable}
    />
  )
}

export default WatchButton
