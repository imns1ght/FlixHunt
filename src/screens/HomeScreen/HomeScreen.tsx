import React from 'react'

import { ScrollView } from 'react-native'
import { MediaCarousel, UpcomingList } from '~/components'
import { translate } from '~/locales'

import styles from './HomeScreen.styles'

const HomeScreen = () => (
  <ScrollView style={styles.container}>
    <MediaCarousel type='trendingAll' mediaType='all' />
    <MediaCarousel type='nowPlaying' mediaType='movie' />
    <MediaCarousel type='popular' mediaType={'tv'} customTitle={translate('tvRecommendations')} />
    <MediaCarousel type='airingToday' mediaType='tv' />
    <MediaCarousel
      type='popular'
      mediaType={'movie'}
      customTitle='Movies your friends are watching'
    />
    <UpcomingList />
    <MediaCarousel type='topRated' mediaType={'all'} />
  </ScrollView>
)

export default HomeScreen
