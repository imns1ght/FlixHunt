import React from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { MediaCard, Section } from '~/components'
import { MediasType } from '~/models'
import { API } from '~/services'
import { mediaType } from '~/types'
import styles from './CardCarousel.styles'

type CarouselTypes = 'trending' | 'popular' | 'top_rated'

const titles = {
  trending: 'Trending 🔥',
  popular: 'What people are watching',
  top_rated: 'Top rated',
}

const CardCarousel = ({ type, mediaType }: { type: CarouselTypes; mediaType: mediaType }) => {
  const [data, setData] = React.useState<MediasType[]>()
  const [loading, setLoading] = React.useState(true)

  const fetchData = React.useCallback(async () => {
    let response
    if (type === 'trending') response = await API.getTrending('week', mediaType)
    else if (type === 'popular') response = await API.getPopular(mediaType)
    else if (type === 'top_rated') response = await API.getTopRated(mediaType, 1)

    if (response) setData(response)
    setLoading(false)
  }, [mediaType, type])

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
            item.poster_path ? <MediaCard item={item} index={index} mediaType={mediaType} /> : null
          }
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          removeClippedSubviews
          horizontal
        />
      )}
    </Section>
  )
}

export default CardCarousel
