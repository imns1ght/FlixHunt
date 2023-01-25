import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { MovieData } from '~/models/movies/movie'
import styles from './MediaScreen.styles'
import Cast from './Cast'
import Description from './Description'
import Header from './Header'
import { NavigationScreenProps } from '~/navigation'
import { API } from '~/services'
import { ImagesCarousel, Related, VideosCarousel } from '~/components'

const MediaScreen = ({ route }: NavigationScreenProps['Media']) => {
  const { id, mediaType } = route.params
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState<MovieData>()

  const fetchData = React.useCallback(async () => {
    const response = await API.getByID(id, mediaType)
    setData(response)
    setLoading(false)
  }, [mediaType, id])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size='large' />
        </View>
      ) : data ? (
        <View>
          <Header movieData={data} />
          <Description movieData={data} />
          {data.images.backdrops.length > 0 && <ImagesCarousel images={data.images.backdrops} />}
          {data.videos.results.length > 0 && <VideosCarousel videos={data.videos.results} />}
          <Cast movieId={data.id} mediaType={mediaType} />
          {!!data.belongs_to_collection && (
            <Related id={data.id} collectionId={data.belongs_to_collection.id} />
          )}
        </View>
      ) : (
        <Text>Error...</Text>
      )}
    </ScrollView>
  )
}

export default MediaScreen
