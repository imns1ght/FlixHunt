// Documentation: https://developers.themoviedb.org/3/discover/movie-discover

import { MovieSimpleType } from '../medias'

export type DiscoverMovieResponse = {
  page: number
  results: MovieSimpleType[]
  total_results: number
  total_pages: number
}

export type DiscoverMovieParams = {
  params: {
    api_key: string
    language?: string
    region?: string
    sort_by?: string
    certification_country?: string
    certification?: string
    include_adult?: boolean
    include_video?: boolean
    page?: number
    primary_release_year?: number
    'primary_release_date.gte'?: string
    'primary_release_date.lte'?: string
    'release_date.gte'?: string
    'release_date.lte'?: string
    year?: number
    with_cast?: string
    with_crew?: string
    with_people?: string
    with_companies?: string
    with_genres?: string
    without_genres?: string
    with_keywords?: string
    without_keywords?: string
    with_original_language?: string
  }
}
