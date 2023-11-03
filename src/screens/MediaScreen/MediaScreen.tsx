import React from 'react'
import { ScrollView, View, SafeAreaView } from 'react-native'
import styles from './MediaScreen.styles'
import Header from './Header'
import { NavigationScreenProps } from '~/navigation'
import { API, Authentication } from '~/services'
import {
  CastCarousel,
  CollectionCarousel,
  CustomActivityIndicator,
  CustomText,
  ImagesCarousel,
  MediaCarousel,
  Section,
  VideosCarousel,
} from '~/components'
import { MediaFullType } from '~/models'
import { translate } from '~/locales'

const MediaScreen = ({ route }: NavigationScreenProps['Media']) => {
  const { id, mediaType } = route.params
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState<MediaFullType>()
  const [userAuthenticated, setUserAuthenticated] = React.useState(false)

  const fetchData = React.useCallback(async () => {
    const response = await API.getByID(id, mediaType, await Authentication.getSessionId())
    setData(response)
  }, [mediaType, id])

  const loadData = React.useCallback(async () => {
    await fetchData()
    const isUserLogged = await Authentication.isUserLogged()
    setUserAuthenticated(isUserLogged)
    setLoading(false)
  }, [fetchData])

  React.useEffect(() => {
    loadData()
  }, [loadData])

  const Content = ({ data }: { data: MediaFullType }) => {
    const showImages = data.images.backdrops.length > 0
    const showVideos = data.videos.results.length > 0
    const isMovie = data.media_type === 'movie'
    const youtubeVideos = React.useMemo(
      () => data.videos.results.filter(item => item.site.toLowerCase() === 'youtube'),
      [data.videos.results]
    )

    return (
      <View>
        <Header
          id={data.id}
          mediaType={isMovie ? 'movie' : 'tv'}
          title={isMovie ? data.title : data.name}
          genres={data.genres}
          images={data.images}
          poster_path={data.poster_path}
          release_date={isMovie ? data.release_date : data.first_air_date}
          runtime={isMovie ? data.runtime : null}
          vote_average={data.vote_average}
          vote_count={data.vote_count}
          seasonsCount={!isMovie ? data.seasons.length : undefined}
          watch_providers={data.watch_providers}
          userAuthenticated={userAuthenticated}
          favoriteStatus={data.account_states?.favorite ?? false}
        />
        <Section>
          <CustomText type='paragraph'>{data.overview}</CustomText>
        </Section>
        {showImages && <ImagesCarousel images={data.images.backdrops} />}
        {showVideos && <VideosCarousel videos={youtubeVideos} />}
        <CastCarousel id={data.id} mediaType={mediaType} />
        {isMovie && !!data.belongs_to_collection && (
          <CollectionCarousel id={data.id} collectionId={data.belongs_to_collection.id} />
        )}
        <MediaCarousel
          id={data.id}
          mediaType={data.media_type}
          widgetName='recommendationsById'
          widgetType='default'
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        {loading ? (
          <View style={styles.loading}>
            <CustomActivityIndicator size='large' />
          </View>
        ) : data ? (
          <Content data={data} />
        ) : (
          <CustomText type='paragraph'>{translate('error')}</CustomText>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default MediaScreen
