import React from 'react'

import { ScrollView } from 'react-native'
import { MediaCarousel } from '~/components'

import styles from './TVShowsScreen.styles'

const mediaType = 'tv'

const TVShowsScreen = () => (
  <ScrollView style={styles.container}>
    <MediaCarousel type='trending' mediaType={mediaType} />
    <MediaCarousel type='airingToday' mediaType={mediaType} />
    <MediaCarousel type='popular' mediaType={mediaType} />
    <MediaCarousel type='topRated' mediaType={mediaType} />
  </ScrollView>
)

export default TVShowsScreen
