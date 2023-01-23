import React from 'react'

import { ScrollView } from 'react-native'
import { MoviesCarousel, Upcoming } from '~/components'

import styles from './HomeScreen.styles'

const HomeScreen = () => (
  <ScrollView style={styles.container}>
    <MoviesCarousel type='trending' />
    <MoviesCarousel type='popular' />
    <Upcoming />
    <MoviesCarousel type='top_rated' />
  </ScrollView>
)

export default HomeScreen
