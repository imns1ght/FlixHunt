import React from 'react'
import { CustomActivityIndicator, CustomText, HorizontalCard, Section } from '~/components'
import { MovieSimpleType } from '~/models'
import { API } from '~/services'
import { translate } from '~/locales'
import { FlatList } from 'react-native'

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

  const renderItem = React.useCallback(({ item }: { item: MovieSimpleType }) => {
    return <HorizontalCard key={item.id} data={item} />
  }, [])

  return (
    <Section title={translate('widgets.movie.upcoming')}>
      {loading ? (
        <CustomActivityIndicator size='large' />
      ) : !data ? (
        <CustomText type='paragraph'>{translate('error')}</CustomText>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          initialNumToRender={3}
          maxToRenderPerBatch={1}
        />
      )}
    </Section>
  )
}

export default UpcomingList
