// Documentation: https://developers.themoviedb.org/3/trending/get-trending

import { MovieSimpleType } from '../movie-simple'

export type TrendingResponse = {
  page: number
  results: MovieSimpleType[]
  total_pages: number
  total_results: number
}

export type TrendingParams = {
  params: {
    api_key: string
    media_type: string
    time_window: string
  }
}
