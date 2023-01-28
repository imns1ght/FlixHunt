import React from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { Card, CustomText, Section } from '~/components'
import { MediaSimpleType, mediaType } from '~/models'
import { API } from '~/services'
import styles from './CardCarousel.styles'

type CarouselTypes =
  | 'trending'
  | 'trending_all'
  | 'popular'
  | 'top_rated'
  | 'recommendations'
  | 'now_playing'
  | 'airing_today'

const titles = {
  trending: 'Trending',
  trending_all: 'Popular',
  popular: 'What people are watching',
  top_rated: 'Top rated',
  recommendations: 'Recommendations',
  now_playing: 'Movies in theaters',
  airing_today: 'Airing today!',
}

const CardCarousel = ({
  id,
  type,
  mediaType,
  customTitle,
}: {
  id?: number
  type: CarouselTypes
  mediaType: mediaType
  customTitle?: string
}) => {
  const [data, setData] = React.useState<MediaSimpleType[]>()
  const [loading, setLoading] = React.useState(true)

  const fetchData = React.useCallback(async () => {
    let response
    if (type === 'trending') response = await API.getTrending('week', mediaType)
    if (type === 'trending_all') response = await API.getTrending('week', 'all')
    else if (type === 'popular') response = await API.getPopular(mediaType)
    else if (type === 'top_rated') response = await API.getTopRated(mediaType, 1)
    else if (type === 'recommendations' && !!id)
      response = await API.getRecommendations(id, mediaType)
    else if (type === 'now_playing') response = await API.getMovieNowPlaying()
    else if (type === 'airing_today') response = await API.getTVShowAiringToday()

    if (response) setData(response)
    setLoading(false)
  }, [id, mediaType, type])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  const renderItem = React.useCallback(
    ({ item }: { item: MediaSimpleType }) =>
      item.poster_path ? <Card item={item} mediaType={item.media_type ?? mediaType} /> : null,
    [mediaType]
  )

  return (
    <Section title={customTitle ?? titles[type]}>
      {loading ? (
        <ActivityIndicator size='large' />
      ) : !data ? (
        <CustomText type='paragraph'>Failed to fetch</CustomText>
      ) : (
        <FlatList
          keyExtractor={key => key.id.toString()}
          data={data}
          renderItem={renderItem}
          ListEmptyComponent={<CustomText type='paragraph'>Nothing to see here...</CustomText>}
          initialNumToRender={3}
          maxToRenderPerBatch={5}
          horizontal
        />
      )}
    </Section>
  )
}

export default CardCarousel
