import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { Card, CustomText, Section } from '~/components'
import { MediaSimpleType, mediaType } from '~/models'
import { API } from '~/services'

type CarouselTypes = 'trending' | 'popular' | 'top_rated'

const titles = {
  trending: 'Trending 🔥',
  popular: 'What people are watching',
  top_rated: 'Top Rated',
}

const CardCarousel = ({ type, mediaType }: { type: CarouselTypes; mediaType: mediaType }) => {
  const [moviesData, setMoviesData] = React.useState<MediaSimpleType[]>()
  const [loading, setLoading] = React.useState(true)

  const fetchData = React.useCallback(async () => {
    let response
    if (type === 'trending') response = await API.getTrending('week', mediaType)
    else if (type === 'popular') response = await API.getPopular(mediaType)
    else if (type === 'top_rated') response = await API.getTopRated(mediaType, 1)

    if (response) setMoviesData(response)
    setLoading(false)
  }, [mediaType, type])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  const renderItem = React.useCallback(
    ({ item }: { item: MediaSimpleType }) =>
      item.poster_path ? <Card item={item} mediaType={item.media_type ?? mediaType} /> : null,
    [mediaType]
  )

  return (
    <Section title={titles[type]}>
      {loading ? (
        <ActivityIndicator size='large' />
      ) : !moviesData ? (
        <CustomText type='paragraph'>Failed to fetch</CustomText>
      ) : (
        <FlatList
          keyExtractor={key => key.id.toString()}
          data={moviesData}
          renderItem={renderItem}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          horizontal
        />
      )}
    </Section>
  )
}

export default CardCarousel
