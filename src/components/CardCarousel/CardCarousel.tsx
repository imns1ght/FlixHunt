import React from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { MediaCard, Section } from '~/components'
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

const titles = {
  trending: 'Trending',
  trending_all: 'Trending',
  popular: 'What people are watching',
  top_rated: 'Top rated',
  recommendations: 'Recommendations',
  now_playing: 'Movies in theaters',
}

const CardCarousel = ({
  id,
  type,
  mediaType,
}: {
  id?: number
  type: CarouselTypes
  mediaType: mediaType
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
    else if (type === 'now_playing') response = await API.getNowPlaying()

    if (response) setData(response)
    setLoading(false)
  }, [id, mediaType, type])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <Section title={titles[type]}>
      {loading ? (
        <ActivityIndicator size='large' />
      ) : !data ? (
        <Text style={styles.errorMessage}>Failed to fetch</Text>
      ) : (
        <FlatList
          keyExtractor={(key, index) => `${key.id.toString()}${index}`}
          data={data}
          renderItem={({ item, index }) =>
            item.poster_path ? (
              <MediaCard item={item} index={index} mediaType={item.media_type ?? mediaType} />
            ) : null
          }
          ListEmptyComponent={<Text style={styles.errorMessage}>Nothing to see here...</Text>}
          initialNumToRender={3}
          maxToRenderPerBatch={5}
          removeClippedSubviews
          horizontal
        />
      )}
    </Section>
  )
}

export default CardCarousel
