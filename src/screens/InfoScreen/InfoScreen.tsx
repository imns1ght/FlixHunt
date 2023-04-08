import React from 'react'

import { Linking, ScrollView } from 'react-native'
import { CustomText, HeaderBar, Section } from '~/components'
import { translate } from '~/locales'

const InfoScreen = () => {
  const onPress = () => {
    Linking.openURL('https://github.com/imns1ght/FlixHunt')
  }
  return (
    <ScrollView>
      <Section centered removeVerticalMargin removeHorizontalMargin>
        <HeaderBar title={translate('info.title')} />
        <Section title={translate('info.disclaimer.title')} removeVerticalMargin>
          <CustomText type='paragraph'>{translate('info.disclaimer.tmdbAccuracy')}</CustomText>
          <CustomText type='paragraph'>{translate('info.disclaimer.tmdbNotAffiliated')}</CustomText>
        </Section>
        <Section title={translate('info.contributing.title')} removeVerticalMargin>
          <CustomText type='paragraph'>{translate('info.contributing.description')}</CustomText>
          <CustomText type='link' onPress={onPress}>
            {translate('info.contributing.link')}
          </CustomText>
        </Section>
      </Section>
    </ScrollView>
  )
}

export default InfoScreen
