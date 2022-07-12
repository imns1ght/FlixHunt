// Documentation: https://developers.themoviedb.org/3/movies/get-movie-details

import { MovieVideo } from './videos'
import genre from '../genre'
import ProductionCompanies from '../production-companies'
import { ProductionCountries } from '../production-countries'
import SpokenLanguages from '../spoken_languages'
import { ImagesType } from './images'

export type BelongsToCollectionType = {
  backdrop_path: string | null
  id: number
  name: string
  poster_path: string | null
}
export interface MovieResponse {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection: BelongsToCollectionType
  budget: number
  genres: genre[]
  homepage: string | null
  images: ImagesType
  id: number
  imdb_id: string | null
  original_language: string
  original_title: string
  overview: string | null
  popularity: number
  poster_path: string
  production_companies?: ProductionCompanies[]
  production_countries: ProductionCountries[]
  release_date: string
  revenue: number
  runtime: number | null
  spoken_languages: SpokenLanguages[]
  status: string
  tagline: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type MovieData = MovieResponse & {
  videos: { results: MovieVideo[] }
}

export interface MovieParams {
  params: {
    api_key: string
    language?: string
    append_to_response?: string
    include_image_language?: string
  }
}
