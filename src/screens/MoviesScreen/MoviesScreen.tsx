import React from 'react'

import { ScrollView } from 'react-native'
import { MediaCarousel, UpcomingList } from '~/components'

import styles from './MoviesScreen.styles'

const mediaType = 'movie'

const MoviesScreen = () => (
  <ScrollView style={styles.container}>
    <MediaCarousel type='trending' mediaType={mediaType} />
    <MediaCarousel type='nowPlaying' mediaType={mediaType} />
    <MediaCarousel type='popular' mediaType={mediaType} />
    <UpcomingList />
    <MediaCarousel type='topRated' mediaType={mediaType} />
  </ScrollView>
)

export default MoviesScreen
