import React from 'react'
import { CustomText, HorizontalCard, Section } from '~/components'
import { MovieSimpleType } from '~/models'
import { ActivityIndicator } from 'react-native'
import { API } from '~/services'

const Upcoming = () => {
  const [data, setData] = React.useState<MovieSimpleType[]>()
  const [loading, setLoading] = React.useState(true)

  const fetchData = React.useCallback(async () => {
    const response = await API.getMovieUpcoming()
    if (response) setData(response)
    setLoading(false)
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <Section title='Upcoming...'>
      {loading ? (
        <ActivityIndicator size='large' />
      ) : !data ? (
        <CustomText type='paragraph'>Failed to fetch movies</CustomText>
      ) : (
        data.map(movie => <HorizontalCard key={movie.id} data={movie} />)
      )}
    </Section>
  )
}

export default Upcoming
