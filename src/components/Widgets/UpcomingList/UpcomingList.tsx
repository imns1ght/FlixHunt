import React from 'react'
import { CustomActivityIndicator, CustomText, HorizontalCard, Section } from '~/components'
import { MovieSimpleType } from '~/models'
import { API } from '~/services'
import { translate } from '~/locales'

const UpcomingList = () => {
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
    <Section title={translate('upcoming')}>
      {loading ? (
        <CustomActivityIndicator size='large' />
      ) : !data ? (
        <CustomText type='paragraph'>{translate('error')}</CustomText>
      ) : (
        data.map(movie => <HorizontalCard key={movie.id} data={movie} />)
      )}
    </Section>
  )
}

export default UpcomingList
