import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { MovieResponse } from '~/models/movies/movie'
import styles from './MovieScreen.styles'
import MovieCast from './Cast'
import Description from './Description'
import Header from './Header'
import { NavigationScreenProps } from '~/navigation'
import { API } from '~/services'
import { ImagesCarousel, Related } from '~/components'

const MovieScreen = ({ route }: NavigationScreenProps['Movie']) => {
  const { movieId } = route.params
  const [loading, setLoading] = React.useState(true)
  const [movieData, setMovieData] = React.useState<MovieResponse>()
  const scrollRef = React.useRef<ScrollView>(null)

  const fetchMovieData = React.useCallback(async () => {
    const response = await API.getMovieByID(movieId)
    setMovieData(response)
    setLoading(false)
  }, [movieId])

  React.useEffect(() => {
    fetchMovieData()
  }, [fetchMovieData])

  React.useEffect(() => {
    if (movieId) scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true })
  }, [movieId])

  console.log({ movieData })

  return (
    <ScrollView ref={scrollRef} contentContainerStyle={styles.scrollview}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size='large' />
        </View>
      ) : movieData ? (
        <View>
          <Header movieData={movieData} />
          <Description movieData={movieData} />
          <ImagesCarousel movieId={movieId} images={movieData.images} />
          <MovieCast movieId={movieData.id} />
          {!!movieData.belongs_to_collection && (
            <Related movieId={movieData.id} collectionId={movieData.belongs_to_collection.id} />
          )}
        </View>
      ) : (
        <Text>Error...</Text>
      )}
    </ScrollView>
  )
}

export default MovieScreen
