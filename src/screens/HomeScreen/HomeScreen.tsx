import React from 'react'

import { ScrollView } from 'react-native'
import { CardCarousel } from '~/components'

import styles from './HomeScreen.styles'

const HomeScreen = () => (
  <ScrollView style={styles.container}>
    <CardCarousel type='trending_all' mediaType='all' />
    <CardCarousel type='now_playing' mediaType='movie' />
    <CardCarousel type='airing_today' mediaType='tv' customTitle='TV Shows airing today!' />
    <CardCarousel type='trending' mediaType='tv' customTitle='Recommended TV Shows' />
  </ScrollView>
)

export default HomeScreen
