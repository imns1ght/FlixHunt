import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { MovieData } from '~/models/movies/movie'
import styles from './MovieScreen.styles'
import MovieCast from './Cast'
import Description from './Description'
import Header from './Header'
import { NavigationScreenProps } from '~/navigation'
import { API } from '~/services'
import { ImagesCarousel, Related, VideosCarousel } from '~/components'

const MovieScreen = ({ route }: NavigationScreenProps['Movie']) => {
  const { movieId } = route.params
  const [loading, setLoading] = React.useState(true)
  const [movieData, setMovieData] = React.useState<MovieData>()
  const scrollRef = React.useRef<ScrollView>(null)

  const fetchMovieData = React.useCallback(async () => {
    const moviesByID = await API.getMovieByID(movieId)
    setMovieData(moviesByID)
    setLoading(false)
  }, [movieId])

  React.useEffect(() => {
    fetchMovieData()
  }, [fetchMovieData])

  React.useEffect(() => {
    if (movieId) scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true })
  }, [movieId])

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
          <VideosCarousel videos={movieData.videos.results} />
          <ImagesCarousel images={movieData.images} />
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
