import React from 'react'

import { ScrollView } from 'react-native'
import { CardCarousel } from '~/components'

import styles from './TVShowsScreen.styles'

const mediaType = 'tv'

const TVShowsScreen = () => (
  <ScrollView style={styles.container}>
    <CardCarousel type='popular' mediaType={mediaType} />
    <CardCarousel type='trending' mediaType={mediaType} />
    <CardCarousel type='top_rated' mediaType={mediaType} />
  </ScrollView>
)

export default TVShowsScreen
