export type MovieType = {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  media_type: 'movie'
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

export type TVType = {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  first_air_date: string
  last_air_date: string
  media_type: 'tv'
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

export type MediasType = MovieType | TVType
