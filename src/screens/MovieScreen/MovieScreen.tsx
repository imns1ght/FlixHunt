import React, { useEffect, useState } from 'react'
import { Image, Text, View, ActivityIndicator } from 'react-native'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler'
import NumberFormat from 'react-number-format'
import { MovieResponse } from '../../models/movies/movie'
import { getMovieByID } from '../../services/api'
import { CONSTANTS } from '../../services/constants'
import styles from './style'
import { COLORS } from '../../../style'
import { useNavigation } from '@react-navigation/native'
import CastAndCrew from './CastAndCrew/CastAndCrew'
import { arrToStringFormated, convertMinsToTime } from '../../../utils'

const MovieScreen = (props: any) => {
  const [movieData, setMovieData] = useState<MovieResponse>()
  const navigation = useNavigation()

  useEffect(() => {
    const getResponse = async () => {
      const response = await getMovieByID(props.route.params.movieId)
      setMovieData(response)
    }

    getResponse()
  }, [])

  const shouldRender = () => {
    return movieData ? true : false
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      <TouchableHighlight
        onPress={() => {
          navigation.goBack()
        }}
        style={{ alignSelf: 'flex-start', marginBottom: 10 }}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
      >
        {/* <Ionicons name="arrow-back-sharp" size={50} color={COLORS.primary} /> */}
      </TouchableHighlight>
      {shouldRender() ? (
        <View style={styles.container}>
          <Image
            source={{
              uri: `${CONSTANTS.api_image_url}/w780${movieData!.poster_path}`,
            }}
            style={styles.image}
          />
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Text style={styles.title}>{movieData!.title}</Text>
            <Text style={styles.subtitle}>{movieData!.tagline}</Text>
            <Text style={styles.overview}>{movieData!.overview}</Text>
            <Text style={styles.tags}>Genre: {arrToStringFormated(movieData!.genres)}</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={styles.tags}>Rating: {movieData!.vote_average}</Text>
              {/* <FontAwesome name="star" size={14} color="orange" style={{ marginLeft: 3 }} /> */}
            </View>
            <Text style={styles.tags}>Duration: {convertMinsToTime(movieData!.runtime)}</Text>
            <Text style={styles.tags}>Release date: {movieData!.release_date}</Text>
            <NumberFormat
              value={movieData?.budget}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={value => <Text style={styles.tags}>Budget: {value}</Text>}
            />
            <NumberFormat
              value={movieData?.revenue}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={value => <Text style={styles.tags}>Revenue: {value}</Text>}
            />
            <Text style={styles.tags}>
              Production: {arrToStringFormated(movieData!.production_companies)}
            </Text>
            <CastAndCrew movie_id={movieData!.id} />
          </View>
        </View>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </ScrollView>
  )
}

export default MovieScreen
