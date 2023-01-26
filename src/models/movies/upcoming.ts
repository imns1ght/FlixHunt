// Documentation: https://developers.themoviedb.org/3/movies/get-top-rated-movies

import { MovieSimpleType } from '../medias'

export interface UpcomingResponse {
  page: number
  results: MovieSimpleType[]
  total_results: number
  total_pages: number
}

export interface UpcomingParams {
  params: {
    api_key: string
    language?: string
    page?: number
    region?: string
  }
}
