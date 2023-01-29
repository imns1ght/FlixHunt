import React from 'react'

import { ScrollView } from 'react-native'
import { MediaCarousel } from '~/components'

import styles from './HomeScreen.styles'

const HomeScreen = () => (
  <ScrollView style={styles.container}>
    <MediaCarousel type='trending_all' mediaType='all' />
    <MediaCarousel type='now_playing' mediaType='movie' />
    <MediaCarousel type='airing_today' mediaType='tv' customTitle='TV Shows airing today!' />
    <MediaCarousel type='trending' mediaType='tv' customTitle='Recommended TV Shows' />
  </ScrollView>
)

export default HomeScreen
