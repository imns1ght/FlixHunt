import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList } from 'react-native'
import { Card, CustomActivityIndicator, CustomText, Section } from '~/components'
import { MediaSimpleType, mediaType } from '~/models'
import { MediaGenres, MediaGenresType } from '~/models/genre'
import { StackNavigationProps } from '~/navigation'
import { API } from '~/services'
import { ActivatedGenreWidgets, WidgetName, WidgetType } from '~/types/widgets'
import { shuffleArray } from '~/utils'

export type MediaCarouselType = {
  id?: number
  widgetType: WidgetType
  widgetName: WidgetName
  mediaType: mediaType
}

const MediaCarousel = ({ id, widgetName, widgetType, mediaType }: MediaCarouselType) => {
  const { t } = useTranslation();
  const [data, setData] = React.useState<MediaSimpleType[]>()
  const [loading, setLoading] = React.useState(true)
  const navigation = useNavigation<StackNavigationProps>()
  const isGenre = widgetType === 'genre'

  const fetchTopRated = React.useCallback(async () => {
    try {
      const movieResponse = await API.getTopRated('movie', 1)
      const tvResponse = await API.getTopRated('tv', 1)
      return movieResponse
        .concat(tvResponse)
        .sort((a, b) => b.vote_average - a.vote_average + (b.vote_count - a.vote_count))
        .slice(0, 30)
    } catch (e) {
      console.error(e)
    }
  }, [])

  const fetchPopularByGender = React.useCallback(async (genre: MediaGenresType) => {
    try {
      const [movieResponse, tvResponse] = await Promise.all([
        API.getPopular('movie', { with_genres: genre }),
        API.getPopular('tv', { with_genres: genre }),
      ])
      return shuffleArray(movieResponse.concat(tvResponse)) as MediaSimpleType[]
    } catch (e) {
      console.error(e)
    }
  }, [])

  const fetchData = React.useCallback(async () => {
    let response

    if (isGenre) {
      const genreName = widgetName as ActivatedGenreWidgets
      response = await fetchPopularByGender(MediaGenres[genreName])
    } else {
      switch (widgetName) {
        case 'trending':
          response = await API.getTrending('week', 'all')
          break
        case 'topRated':
          response = await fetchTopRated()
          break
        case 'recommendationsById':
          if (id) response = await API.getRecommendationsById(id, mediaType)
          break
        case 'moviesInTheaters':
          response = await API.getMovieNowPlaying()
          break
        case 'newEpisodeToday':
          response = await API.getTVShowAiringToday()
          break
        case 'movieRecommendations':
          response = await API.getPopular(mediaType)
          break
        case 'tvRecommendations':
          response = await API.getPopular('tv')
          break

        default:
          break
      }
    }

    if (response) setData(response)
    setLoading(false)
  }, [fetchPopularByGender, fetchTopRated, id, isGenre, mediaType, widgetName])

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

  const getTranslatedTitle = () => {
    const prefix = 'widgets.'
    let path = prefix + `${mediaType}.`

    if (isGenre) path += 'genre.'
    path += widgetName

    return t(path)
  }

  return (
    <Section title={getTranslatedTitle()}>
      {loading ? (
        <CustomActivityIndicator size='large' />
      ) : !data ? (
        <CustomText type='paragraph'>{t('error')}</CustomText>
      ) : (
        <FlatList
          keyExtractor={key => key.id.toString()}
          data={data}
          renderItem={renderItem}
          ListEmptyComponent={<CustomText type='paragraph'>{t('nothingFound')}</CustomText>}
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
