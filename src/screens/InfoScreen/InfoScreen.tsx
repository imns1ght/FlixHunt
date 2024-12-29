import React from 'react'
import { useTranslation } from 'react-i18next'

import { Linking, SafeAreaView, ScrollView } from 'react-native'
import { CustomText, HeaderBar, Section } from '~/components'

const InfoScreen = () => {
  const { t } = useTranslation();

  const onPress = () => {
    Linking.openURL('https://github.com/imns1ght/FlixHunt')
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Section centered removeVerticalMargin removeHorizontalMargin>
          <HeaderBar title={t('info.title')} />
          <Section title={t('info.disclaimer.title')} removeVerticalMargin>
            <CustomText type='paragraph'>{t('info.disclaimer.tmdbAccuracy')}</CustomText>
            <CustomText type='paragraph'>
              {t('info.disclaimer.tmdbNotAffiliated')}
            </CustomText>
          </Section>
          <Section title={t('info.contributing.title')} removeVerticalMargin>
            <CustomText type='paragraph'>{t('info.contributing.description')}</CustomText>
            <CustomText type='link' onPress={onPress}>
              {t('info.contributing.link')}
            </CustomText>
          </Section>
        </Section>
      </ScrollView>
    </SafeAreaView>
  )
}

export default InfoScreen
