import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { MovieSimpleType } from '~/models'
import { useNavigation } from '@react-navigation/core'
import { NavigationProps } from '~/navigation'
import styles from './HorizontalCard.styles'
import CONSTANTS from '~/constants'

const HorizontalCard = ({ movie }: { movie: MovieSimpleType }) => {
  const navigation = useNavigation<NavigationProps>()
  const releaseData = React.useMemo(
    () => new Date(movie.release_date).toDateString(),
    [movie.release_date]
  )

  const handlePress = React.useCallback(() => {
    navigation.navigate('Movie', {
      movieId: movie.id,
      movieName: movie.title,
    })
  }, [movie.id, movie.title, navigation])

  return (
    <TouchableOpacity key={movie.id} onPress={() => handlePress()} style={styles.container}>
      <Image
        source={{
          uri: `${CONSTANTS.api_image_url}/w300${movie.poster_path}`,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {movie.title}
        </Text>
        <Text style={styles.overview} numberOfLines={3}>
          {movie.overview}
        </Text>
        <Text style={styles.tags}>{releaseData}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HorizontalCard
