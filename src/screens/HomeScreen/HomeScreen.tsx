import React from 'react'
import { FlatList } from 'react-native'
import { MediaCarousel, UpcomingList } from '~/components'
import { MediaCarouselType } from '~/components/Widgets/Carousels/MediaCarousel/MediaCarousel'
import { MediaGenres } from '~/models/genre'
import { WidgetName, WidgetType } from '~/types/widgets'
import { shuffleArray } from '~/utils'

const TopFixedWidgets: MediaCarouselType[] = [
  { widgetType: 'default', widgetName: 'trending', mediaType: 'all' },
  { widgetType: 'default', widgetName: 'newEpisodeToday', mediaType: 'tv' },
  { widgetType: 'default', widgetName: 'tvRecommendations', mediaType: 'tv' },
  { widgetType: 'default', widgetName: 'movieRecommendations', mediaType: 'movie' },
  { widgetType: 'default', widgetName: 'upcoming', mediaType: 'movie' },
]

const BottomFixedWidgets: MediaCarouselType[] = [
  { widgetType: 'default', widgetName: 'topRated', mediaType: 'all' },
]

const ActivatedGenreWidgets: MediaCarouselType[] = Object.keys(MediaGenres).map(item => ({
  widgetType: 'genre' as WidgetType,
  widgetName: item as WidgetName,
  mediaType: 'all',
}))

export const ActivatedWidgets = TopFixedWidgets.concat(
  shuffleArray(ActivatedGenreWidgets) as MediaCarouselType[]
).concat(BottomFixedWidgets)

const HomeScreen = () => {
  const renderItem = React.useCallback(({ item }: { item: MediaCarouselType }) => {
    if (item.widgetName === 'upcoming') return <UpcomingList />

    return (
      <MediaCarousel
        id={item.id}
        widgetName={item.widgetName}
        widgetType={item.widgetType}
        mediaType={item.mediaType}
      />
    )
  }, [])

  return (
    <FlatList
      data={ActivatedWidgets}
      renderItem={renderItem}
      initialNumToRender={1}
      maxToRenderPerBatch={1}
    />
  )
}

export default HomeScreen
