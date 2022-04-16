import React from 'react'
import { ActivityIndicator, Image, ImageBackground, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { MovieResponse } from '~/models/movies/movie'
import { getMovieByID } from '~/services/api'
import CONSTANTS from '~/constants'
import styles from './MovieScreen.styles'
import MovieCast from './Cast'
import Description from './Description'
import { arrToStringFormated } from '~/utils'
import { NavigationScreenProps } from '~/navigation'

const MovieScreen = ({ route }: NavigationScreenProps['Movie']) => {
  const { movieId } = route.params
  const [loading, setLoading] = React.useState(true)
  const [movieData, setMovieData] = React.useState<MovieResponse>()

  const fetchMovieData = React.useCallback(async () => {
    const response = await getMovieByID(movieId)
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
          <ImageBackground
            source={{ uri: `${CONSTANTS.api_image_url}/w780${movieData.poster_path}` }}
            style={styles.cover}
            imageStyle={styles.coverImage}
            blurRadius={8}
          >
            <View style={styles.titleWithImage}>
              <Image
                source={{
                  uri: `${CONSTANTS.api_image_url}/w780${movieData.poster_path}`,
                }}
                style={styles.image}
              />
              <View style={styles.titleContainer}>
                <View>
                  <Text style={styles.title}>{movieData.title}</Text>
                  {!!movieData.tagline && <Text style={styles.subtitle}>{movieData.tagline}</Text>}
                </View>
                <View>
                  {!!movieData.genres && (
                    <Text style={styles.tags}>{arrToStringFormated(movieData.genres)}</Text>
                  )}
                  {!!movieData.release_date && (
                    <Text style={styles.tags}>
                      {new Date(movieData.release_date).toDateString()}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.content}>
            {!!movieData.overview && <Text style={styles.overview}>{movieData.overview}</Text>}
          </View>
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
