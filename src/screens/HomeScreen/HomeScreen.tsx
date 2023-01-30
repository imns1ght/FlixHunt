import React from 'react'

import { ScrollView } from 'react-native'
import { MediaCarousel } from '~/components'
import { translate } from '~/locales'

import styles from './HomeScreen.styles'

const HomeScreen = () => (
  <ScrollView style={styles.container}>
    <MediaCarousel type='trendingAll' mediaType='all' />
    <MediaCarousel type='nowPlaying' mediaType='movie' />
    <MediaCarousel type='airingToday' mediaType='tv' />
    <MediaCarousel type='trending' mediaType='tv' customTitle={translate('tvRecommendations')} />
  </ScrollView>
)

export default HomeScreen
