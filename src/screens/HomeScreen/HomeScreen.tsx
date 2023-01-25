import React from 'react'

import { ScrollView } from 'react-native'
import { CardCarousel } from '~/components'

import styles from './HomeScreen.styles'

const HomeScreen = () => (
  <ScrollView style={styles.container}>
    <CardCarousel type='trending' mediaType={'movie'} />
    {/* <CardCarousel type='trending' mediaType={'tv'} /> */}
    {/* <CardCarousel type='popular' mediaType={'movie'} /> */}
    <CardCarousel type='popular' mediaType={'tv'} />
    <CardCarousel type='top_rated' mediaType={'movie'} />
    {/* <CardCarousel type='top_rated' mediaType={'tv'} /> */}
  </ScrollView>
)

export default HomeScreen
