import { BelongsToCollectionType } from './collection'
import genre from './genre'
import { ImagesType } from './images'
import ProductionCompanies from './production-companies'
import { ProductionCountries } from './production-countries'
import SpokenLanguages from './spoken_languages'
import { Season } from './tv'
import { VideoType } from './videos'

export type MovieMediaType = 'movie'
export type TVMediaType = 'tv'

export type mediaType = MovieMediaType | TVMediaType | 'all'

export type MovieSimpleType = {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  media_type: MovieMediaType
  original_language: string
  original_title: string
  overview: string | null
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type TVSimpleType = {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  first_air_date: string
  last_air_date: string
  media_type: TVMediaType
  name: string
  original_language: string
  original_name: string
  overview: string | null
  popularity: number
  poster_path: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type MovieFullType = MovieSimpleType & {
  belongs_to_collection: BelongsToCollectionType
  budget: number
  genres: genre[]
  homepage: string | null
  images: ImagesType
  production_companies?: ProductionCompanies[]
  production_countries: ProductionCountries[]
  revenue: number
  runtime?: number | null
  spoken_languages: SpokenLanguages[]
  status: string
  tagline: string | null
  videos: { results: VideoType[] }
  vote_average: number
  vote_count: number
}

export type TVFullType = TVSimpleType & {
  genres: genre[]
  homepage: string | null
  images: ImagesType
  number_of_seasons: number
  production_companies?: ProductionCompanies[]
  production_countries: ProductionCountries[]
  seasons: Season[]
  spoken_languages: SpokenLanguages[]
  status: string
  tagline: string | null
  videos: { results: VideoType[] }
}

export type MediaSimpleType = MovieSimpleType | TVSimpleType
export type MediaFullType = MovieFullType | TVFullType
