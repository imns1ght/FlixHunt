import React from 'react'
import { CustomActivityIndicator, CustomText, HorizontalCard, Section } from '~/components'
import { MovieSimpleType } from '~/models'
import { API } from '~/services'
import { FlatList } from 'react-native'
import { useTranslation } from 'react-i18next'

const UpcomingList = () => {
  const { t } = useTranslation();
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
    <Section title={t('widgets.movie.upcoming')}>
      {loading ? (
        <CustomActivityIndicator size='large' />
      ) : !data ? (
        <CustomText type='paragraph'>{t('error')}</CustomText>
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
