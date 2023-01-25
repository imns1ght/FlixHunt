import React from 'react'
import styles from './Upcoming.styles'
import { HorizontalCard, Section } from '~/components'
import { MovieType } from '~/models'
import { ActivityIndicator, Text } from 'react-native'
import { API } from '~/services'

const Upcoming = () => {
  const [data, setData] = React.useState<MovieType[]>()
  const [loading, setLoading] = React.useState(true)

  const fetchData = React.useCallback(async () => {
    const response = await API.getUpcoming()
    if (response) setData(response)
    setLoading(false)
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <Section title='Movies in theaters'>
      {loading ? (
        <ActivityIndicator size='large' />
      ) : !data ? (
        <Text style={styles.errorMessage}>Failed to fetch movies</Text>
      ) : (
        data.map(movie => <HorizontalCard key={movie.id} data={movie} />)
      )}
    </Section>
  )
}

export default Upcoming
