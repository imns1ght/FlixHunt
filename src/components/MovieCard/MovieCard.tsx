import React from 'react'
import { Image, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import CONSTANTS from '~/constants'
import { MovieSimpleType } from '~/models'
import styles from './MovieCard.styles'
import { NavigationProps } from '~/navigation'

const MovieCard = ({ item, index }: { item: MovieSimpleType; index: number }) => {
  const navigation = useNavigation<NavigationProps>()

  const onPress = React.useCallback(
    () =>
      navigation.navigate('Movie', {
        movieId: item.id,
        movieName: item.title,
      }),
    [item.id, item.title, navigation]
  )

  return (
    <TouchableHighlight key={index} onPress={onPress} activeOpacity={0.8} style={styles.card}>
      <Image
        source={{
          uri: `${CONSTANTS.api_image_url}/w500${item.poster_path}`,
        }}
        style={styles.image}
      />
    </TouchableHighlight>
  )
}

export default MovieCard
