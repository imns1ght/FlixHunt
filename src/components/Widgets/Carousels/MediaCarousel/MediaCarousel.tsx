import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { Card, CustomText, Section } from '~/components'
import { translate } from '~/locales'
import { MediaSimpleType, mediaType } from '~/models'
import { StackNavigationProps } from '~/navigation'
import { API } from '~/services'

type CarouselTypes =
  | 'trending'
  | 'trendingAll'
  | 'popular'
  | 'topRated'
  | 'recommendations'
  | 'nowPlaying'
  | 'airingToday'

const MediaCarousel = ({
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
  const navigation = useNavigation<StackNavigationProps>()

  const fetchData = React.useCallback(async () => {
    let response
    if (type === 'trending') response = await API.getTrending('week', mediaType)
    if (type === 'trendingAll') response = await API.getTrending('week', 'all')
    else if (type === 'popular') response = await API.getPopular(mediaType)
    else if (type === 'topRated') response = await API.getTopRated(mediaType, 1)
    else if (type === 'recommendations' && !!id)
      response = await API.getRecommendations(id, mediaType)
    else if (type === 'nowPlaying') response = await API.getMovieNowPlaying()
    else if (type === 'airingToday') response = await API.getTVShowAiringToday()

    if (response) setData(response)
    setLoading(false)
  }, [id, mediaType, type])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  const renderItem = React.useCallback(
    ({ item }: { item: MediaSimpleType }) => {
      if (!item.poster_path) return null

      const onPress = () => {
        navigation.navigate('Media', {
          id: item.id,
          title: item.media_type === 'movie' ? item.title : item.name,
          mediaType: item.media_type ?? mediaType,
        })
      }

      return <Card id={item.id} imagePath={item.poster_path} onPress={onPress} />
    },
    [mediaType, navigation]
  )

  return (
    <Section title={customTitle ?? translate(type)}>
      {loading ? (
        <ActivityIndicator size='large' />
      ) : !data ? (
        <CustomText type='paragraph'>{translate('error')}</CustomText>
      ) : (
        <FlatList
          keyExtractor={key => key.id.toString()}
          data={data}
          renderItem={renderItem}
          ListEmptyComponent={<CustomText type='paragraph'>{translate('nothingFound')}</CustomText>}
          initialNumToRender={3}
          maxToRenderPerBatch={5}
          showsHorizontalScrollIndicator={false}
          windowSize={3}
          horizontal
        />
      )}
    </Section>
  )
}

export default MediaCarousel
