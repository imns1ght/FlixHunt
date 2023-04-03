import { MediaGenres } from '~/models/genre'

export type ActivatedGenreWidgets = keyof typeof MediaGenres
export type DefaultWidgets =
  | 'recommendationsById'
  | 'topRated'
  | 'trending'
  | 'movieRecommendations'
  | 'moviesInTheaters'
  | 'upcoming'
  | 'newEpisodeToday'
  | 'tvRecommendations'

export type WidgetName = DefaultWidgets | ActivatedGenreWidgets
export type WidgetType = 'default' | 'genre'
