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

const MovieScreen = props => {
  const [loading, setLoading] = React.useState(true)
  const [movieData, setMovieData] = React.useState<MovieResponse>()

  React.useEffect(() => {
    const getResponse = async () => {
      const response = await getMovieByID(props.route.params.movieId)
      setMovieData(response)
      setLoading(false)
    }

    getResponse()
  }, [props.route.params.movieId])

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
