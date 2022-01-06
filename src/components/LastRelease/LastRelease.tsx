import React from 'react'
import { View, Text, ActivityIndicator, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '~/styles'
import { DiscoverMovieResponse } from '~/models/discover/discover-movie'
import { getLatestMoviesByReleaseDate } from '~/services/api'
import MovieCard from '~/components/MovieCard/MovieCard'
import styles from './style'

const LastRelease = () => {
  const navigation = useNavigation()
  const [latestMoviesData, setLatestMoviesData] = React.useState<DiscoverMovieResponse>()
  const [requestPage, setRequestPage] = React.useState<number>(1)

  React.useEffect(() => {
    const getResponse = async () => {
      const response = await getLatestMoviesByReleaseDate(requestPage)
      if (latestMoviesData) {
        response.results = [...latestMoviesData.results, ...response.results]
      }

      setLatestMoviesData(response)
    }

    getResponse()
  }, [latestMoviesData, requestPage])

  return (
    <>
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{'Last Releases'}</Text>
        </View>
      </View>
      {latestMoviesData ? (
        <View style={styles.grid}>
          {latestMoviesData.results.map((movie, index) => {
            return <MovieCard key={index} index={index} item={movie} navigation={navigation} />
          })}
        </View>
      ) : (
        <ActivityIndicator size='large' />
      )}
      <View style={styles.loadMoreButton}>
        <Button
          title='Load more'
          onPress={() => setRequestPage(requestPage + 1)}
          color={COLORS.primary}
        />
      </View>
    </>
  )
}

export default LastRelease
