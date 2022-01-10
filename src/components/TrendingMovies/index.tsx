import React from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import MovieCard from '~/components/MovieCard'
import { Section } from '~/components'
import { MovieSimpleType } from '~/models'
import { api } from '~/services'
import styles from './style'

const TrendingMovies = ({ timePeriod }: { timePeriod: 'day' | 'week' }) => {
  const [moviesData, setMoviesData] = React.useState<MovieSimpleType[]>()
  const [loading, setLoading] = React.useState(true)

  const fetchMovies = React.useCallback(async () => {
    const response = await api.getTrendingMovies(timePeriod)
    if (response) setMoviesData(response)
    setLoading(false)
  }, [])

  React.useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  return (
    <Section title={`${timePeriod === 'week' ? 'Week' : 'Day'} 🔥`}>
      {loading ? (
        <ActivityIndicator size='large' />
      ) : !moviesData ? (
        <Text style={styles.errorMessage}>Failed to fetch movies</Text>
      ) : (
        <FlatList
          keyExtractor={(key, index) => `${key.id.toString()}${index}`}
          data={moviesData.slice(0, 20)}
          renderItem={({ item, index }) => <MovieCard item={item} index={index} />}
          horizontal
        />
      )}
    </Section>
  )
}

export default TrendingMovies
