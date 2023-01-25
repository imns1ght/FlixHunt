// Documentation: https://developers.themoviedb.org/3/movies/get-top-rated-movies

import { MediasType } from '../medias'

export interface TopRatedResponse {
  page: number
  results: MediasType[]
  total_results: number
  total_pages: number
}

export interface TopRatedParams {
  params: {
    api_key: string
    language?: string
    page?: number
    region?: string
  }
}
