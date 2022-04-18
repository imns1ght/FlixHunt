import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { MovieResponse } from '~/models/movies/movie'
import styles from './MovieScreen.styles'
import MovieCast from './Cast'
import Description from './Description'
import Header from './Header'
import { NavigationScreenProps } from '~/navigation'
import { API } from '~/services'

const MovieScreen = ({ route }: NavigationScreenProps['Movie']) => {
  const { movieId } = route.params
  const [loading, setLoading] = React.useState(true)
  const [movieData, setMovieData] = React.useState<MovieResponse>()

  console.log({ movieData })

  const fetchMovieData = React.useCallback(async () => {
    const response = await API.getMovieByID(movieId)
    setMovieData(response)
    setLoading(false)
  }, [movieId])

  React.useEffect(() => {
    fetchMovieData()
  }, [fetchMovieData])

  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      {loading ? (
        <ActivityIndicator size='large' />
      ) : movieData ? (
        <View style={styles.container}>
          <Header movieData={movieData} />
          <Description movieData={movieData} />
          <MovieCast movieId={movieData.id} />
        </View>
      ) : (
        <Text>Error...</Text>
      )}
    </ScrollView>
  )
}

export default MovieScreen
