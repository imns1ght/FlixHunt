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
      <Section centered removeVerticalMargin>
        <HeaderBar />
        <Section title={translate('disclaimer.title')} removeVerticalMargin>
          <CustomText type='paragraph'>{translate('disclaimer.tmdbAccuracy')}</CustomText>
          <CustomText type='paragraph'>{translate('disclaimer.tmdbNotAffiliated')}</CustomText>
        </Section>
        <Section title={translate('contributing.title')} removeVerticalMargin>
          <CustomText type='paragraph'>{translate('contributing.description')}</CustomText>
          <CustomText type='link' onPress={onPress}>
            {translate('contributing.link')}
          </CustomText>
        </Section>
      </Section>
    </ScrollView>
  )
}

export default InfoScreen
