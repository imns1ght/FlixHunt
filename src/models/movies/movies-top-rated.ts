// Documentation: https://developers.themoviedb.org/3/movies/get-top-rated-movies

import MovieSimpleInterface from '../movie-simple'

export interface MoviesTopRatedResponse {
  page: number
  results: MovieSimpleInterface[]
  total_results: number
  total_pages: number
}

export interface MoviesTopRatedParams {
  params: {
    api_key: string
    language?: string
    page?: number
    region?: string
  }
}
