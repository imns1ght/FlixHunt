import React from 'react'

import { ScrollView } from 'react-native'
import { CardCarousel } from '~/components'

import styles from './HomeScreen.styles'

const HomeScreen = () => (
  <ScrollView style={styles.container}>
    <CardCarousel type='trending_all' mediaType='all' />
  </ScrollView>
)

export default HomeScreen
