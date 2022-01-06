import React from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SearchMovieResponse } from '~/models/search/search-movie'
import { CONSTANTS } from '~/services/constants'
import styles from './style'

const SearchResults = ({ data }: { data: SearchMovieResponse }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {data.total_results !== 0 ? (
        <>
          <Text style={styles.title}>Results:</Text>
          {data.results.slice(0, 10).map((movie, index) => {
            return (
              <TouchableHighlight
                key={index}
                onPress={() => {
                  navigation.navigate('Movie', {
                    movieId: movie.id,
                  })
                }}
                activeOpacity={0.6}
                underlayColor='#CCCCCC'
              >
                <View key={index} style={styles.itemContainer}>
                  <Image
                    source={{
                      uri: `${CONSTANTS.api_image_url}/w780${movie.poster_path}`,
                    }}
                    style={styles.image}
                  />
                  <View style={styles.itemTextContainer}>
                    <View>
                      <Text style={styles.itemTitle}>{movie.title}</Text>
                    </View>
                    <View>
                      <Text style={styles.overview}>{movie.overview}</Text>
                    </View>
                    <Text style={styles.tags}>Release date: {movie.release_date}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            )
          })}
        </>
      ) : (
        <Text style={styles.title}>Not found...Try another movie.</Text>
      )}
    </View>
  )
}

export default SearchResults
