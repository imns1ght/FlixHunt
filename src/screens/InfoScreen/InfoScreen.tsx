import React from 'react'

import { Linking, ScrollView } from 'react-native'
import { CustomText, Section } from '~/components'
import { translate } from '~/locales'

const InfoScreen = () => {
  const onPress = () => {
    Linking.openURL('https://github.com/imns1ght/movie-browser')
  }
  return (
    <ScrollView>
      <Section title={translate('disclaimer.title')}>
        <CustomText type='paragraph'>{translate('disclaimer.tmdbAccuracy')}</CustomText>
        <CustomText type='paragraph'>{translate('disclaimer.tmdbNotAffiliated')}</CustomText>
      </Section>
      <Section title={translate('contributing.title')}>
        <CustomText type='paragraph'>{translate('contributing.description')}</CustomText>
        <CustomText type='link' onPress={onPress}>
          {translate('contributing.link')}
        </CustomText>
      </Section>
    </ScrollView>
  )
}

export default InfoScreen
