import React from 'react'
import styles from './Upcoming.styles'
import { HorizontalCard, Section } from '~/components'
import { MovieSimpleType } from '~/models'
import { ActivityIndicator, Text } from 'react-native'
import { API } from '~/services'

const Upcoming = () => {
  const [moviesData, setMoviesData] = React.useState<MovieSimpleType[]>()
  const [loading, setLoading] = React.useState(true)

  const fetchMovies = React.useCallback(async () => {
    const response = await API.getUpcoming()

    if (response) setMoviesData(response)
    setLoading(false)
  }, [])

  React.useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  return (
    <Section title='Coming soon to theaters'>
      {loading ? (
        <ActivityIndicator size='large' />
      ) : !moviesData ? (
        <Text style={styles.errorMessage}>Failed to fetch movies</Text>
      ) : (
        moviesData.map(movie => <HorizontalCard key={movie.id} movie={movie} />)
      )}
    </Section>
  )
}

export default Upcoming
