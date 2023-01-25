// Documentation: https://developers.themoviedb.org/3/trending/get-trending

import { MediasType } from '../medias'

export type TrendingResponse = {
  page: number
  results: MediasType[]
  total_pages: number
  total_results: number
}

export type TrendingParams = {
  params: {
    api_key: string
  }
}
