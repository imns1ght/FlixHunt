import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
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
import MediaScreenHeaderBar from './Header/MediaScreenHeaderBar'

const MediaScreen = ({ route }: NavigationScreenProps['Media']) => {
  const { id, mediaType } = route.params
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState<MediaFullType>()
  const [userAuthenticated, setUserAuthenticated] = React.useState(false)
  const [shouldShowHeaderBarTitle, setShouldShowHeaderBarTitle] = React.useState(false)

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

  const Content = React.useCallback(
    ({ data }: { data: MediaFullType }) => {
      const showImages = data.images.backdrops.length > 0
      const showVideos = data.videos.results.length > 0
      const isMovie = data.media_type === 'movie'
      const youtubeVideos = data.videos.results.filter(
        item => item.site.toLowerCase() === 'youtube'
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
    },
    [mediaType, userAuthenticated]
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <View style={styles.loading}>
          <CustomActivityIndicator size='large' />
        </View>
      ) : data ? (
        <ScrollView
          contentContainerStyle={styles.scrollview}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
          onScroll={event => {
            if (event.nativeEvent.contentOffset.y > 325) setShouldShowHeaderBarTitle(true)
            else if (event.nativeEvent.contentOffset.y < 325) setShouldShowHeaderBarTitle(false)
          }}
        >
          <MediaScreenHeaderBar
            id={id}
            title={data.media_type === 'movie' ? data.title : data.name}
            shouldShowTitle={shouldShowHeaderBarTitle}
            mediaType={mediaType}
            userAuthenticated={userAuthenticated}
            favoriteStatus={data.account_states?.favorite ?? false}
          />
          <Content data={data} />
        </ScrollView>
      ) : (
        <CustomText type='paragraph'>{translate('error')}</CustomText>
      )}
    </SafeAreaView>
  )
}

export default MediaScreen
