import React from 'react'
import { View, Text, ActivityIndicator, ScrollView, ImageBackground } from 'react-native'
import { MovieCastType } from '~/models/movies/movie-credits'
import { api } from '~/services'
import CONSTANTS from '~/constants'
import styles from './style'
import { Section } from '~/components'

const MovieCast = ({ movieId }: { movieId: number }) => {
  const [peopleData, setPeopleData] = React.useState<MovieCastType[]>()
  const [loading, setLoading] = React.useState(true)

  const fetchMovieCast = React.useCallback(async () => {
    const response = await api.getMovieCast(movieId)
    setPeopleData(response)
    setLoading(false)
  }, [movieId])

  React.useEffect(() => {
    fetchMovieCast()
  }, [fetchMovieCast])

  return (
    <Section title='Cast'>
      {loading ? (
        <ActivityIndicator />
      ) : !peopleData ? (
        <Text>Error...</Text>
      ) : (
        <ScrollView style={styles.scrollContainer} horizontal>
          {peopleData.slice(0, 20).map(person => (
            <ImageBackground
              key={person.id}
              source={{
                uri: `${CONSTANTS.api_image_url}/w500${person.profile_path}`,
              }}
              style={styles.card}
            >
              <View style={styles.infoContainer}>
                <Text style={styles.name} numberOfLines={1}>
                  {person.name}
                </Text>
                <Text style={styles.description} numberOfLines={1}>
                  {person.character}
                </Text>
              </View>
            </ImageBackground>
          ))}
        </ScrollView>
      )}
    </Section>
  )
}

export default MovieCast
