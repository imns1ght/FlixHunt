import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SearchMovieResponse } from '~/models/search/search-movie'
import CONSTANTS from '~/constants'
import styles from './style'
import { Section } from '~/components'

const SearchResults = ({ data }: { data: SearchMovieResponse }) => {
  const navigation = useNavigation()

  const handlePress = React.useCallback(
    (movieId: number) =>
      navigation.navigate('Movie', {
        movieId: movieId,
      }),
    [navigation]
  )

  return (
    <Section title='Results'>
      {data.total_results !== 0 ? (
        <>
          {data.results.map(movie => {
            return (
              <TouchableOpacity
                key={movie.id}
                onPress={() => handlePress(movie.id)}
                style={styles.itemContainer}
              >
                <Image
                  source={{
                    uri: `${CONSTANTS.api_image_url}/w300${movie.poster_path}`,
                  }}
                  style={styles.image}
                />
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle} numberOfLines={1}>
                    {movie.title}
                  </Text>
                  <Text style={styles.overview} numberOfLines={3}>
                    {movie.overview}
                  </Text>
                  <Text style={styles.tags}>{new Date(movie.release_date).toDateString()}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </>
      ) : (
        <Text style={styles.errorMessage}>Not found...Try another movie.</Text>
      )}
    </Section>
  )
}

export default SearchResults
