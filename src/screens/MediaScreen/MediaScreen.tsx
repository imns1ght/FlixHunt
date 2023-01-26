import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import styles from './MediaScreen.styles'
import Cast from './Cast'
import Description from './Description'
import Header from './Header'
import { NavigationScreenProps } from '~/navigation'
import { API } from '~/services'
import { CardCarousel, ImagesCarousel, Related, VideosCarousel } from '~/components'
import { MediaFullType } from '~/models'
import { getImagePath } from '~/utils'

const MediaScreen = ({ route }: NavigationScreenProps['Media']) => {
  const { id, mediaType } = route.params
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState<MediaFullType>()

  const fetchData = React.useCallback(async () => {
    const response = await API.getByID(id, mediaType)
    setData(response)
    setLoading(false)
  }, [mediaType, id])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  const Content = ({ data }: { data: MediaFullType }) => {
    let components
    const showImages = data.images.backdrops.length > 0
    const showVideos = data.videos.results.length > 0

    if (data.media_type === 'movie') {
      components = (
        <View>
          <Header
            title={data.title}
            genres={data.genres}
            images={data.images}
            poster_path={data.poster_path}
            release_date={data.release_date}
            runtime={data.runtime}
            tagline={data.tagline}
          />
          <Description
            budget={data.budget}
            revenue={data.revenue}
            homepage={data.homepage}
            runtime={data.runtime}
            overview={data.overview}
            media_type={data.media_type}
          />
          {showImages && <ImagesCarousel images={data.images.backdrops} />}
          {showVideos && <VideosCarousel videos={data.videos.results} />}
          <Cast id={data.id} mediaType={mediaType} />
          {!!data.belongs_to_collection && (
            <Related id={data.id} collectionId={data.belongs_to_collection.id} />
          )}
          <CardCarousel id={data.id} mediaType={data.media_type} type='recommendations' />
        </View>
      )
    } else {
      console.log(getImagePath(data.seasons[0].poster_path))
      components = (
        <View>
          <Header
            title={data.name}
            genres={data.genres}
            images={data.images}
            poster_path={data.poster_path}
            release_date={data.first_air_date}
            tagline={data.tagline}
          />
          <Description
            homepage={data.homepage}
            overview={data.overview}
            media_type={data.media_type}
          />
          {showImages && <ImagesCarousel images={data.images.backdrops} />}
          {showVideos && <VideosCarousel videos={data.videos.results} />}
          <Cast id={data.id} mediaType={mediaType} />
          <CardCarousel id={data.id} mediaType={data.media_type} type='recommendations' />
        </View>
      )
    }

    return components
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size='large' />
        </View>
      ) : data ? (
        <Content data={data} />
      ) : (
        <Text>Error...</Text>
      )}
    </ScrollView>
  )
}

export default MediaScreen
