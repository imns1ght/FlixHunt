import React from 'react'
import { ActivityIndicator, FlatList, ImageBackground, Text, View } from 'react-native'
import { MovieCastType } from '~/models/movies/credits'
import { API } from '~/services'
import styles from './Cast.styles'
import { Section } from '~/components'
import { getImagePath } from '~/utils'

const MovieCast = ({ movieId }: { movieId: number }) => {
  const [peopleData, setPeopleData] = React.useState<MovieCastType[]>()
  const [loading, setLoading] = React.useState(true)

  const fetchMovieCast = React.useCallback(async () => {
    const response = await API.getMovieCast(movieId)
    setPeopleData(response)
    setLoading(false)
  }, [movieId])

  React.useEffect(() => {
    fetchMovieCast()
  }, [fetchMovieCast])

  const renderItem = React.useCallback(({ item }: { item: MovieCastType }) => {
    return item.profile_path ? (
      <ImageBackground
        key={item.id}
        source={{
          uri: getImagePath(item.profile_path, 'w500'),
        }}
        style={styles.card}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.description} numberOfLines={1}>
            {item.character}
          </Text>
        </View>
      </ImageBackground>
    ) : null
  }, [])

  return (
    <Section title='Cast'>
      {loading ? (
        <ActivityIndicator />
      ) : !peopleData ? (
        <Text>Error...</Text>
      ) : (
        <FlatList
          data={peopleData}
          renderItem={renderItem}
          initialNumToRender={2}
          maxToRenderPerBatch={2}
          removeClippedSubviews
          horizontal
        />
      )}
    </Section>
  )
}

export default MovieCast
