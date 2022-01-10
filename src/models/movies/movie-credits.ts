// Documentation: https://developers.themoviedb.org/3/movies/get-movie-credits

export type MovieCastType = {
  adult: boolean
  gender?: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export type MovieCrew = {
  adult: boolean
  gender?: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string
  credit_id: string
  department: string
  job: string
}

export type MovieCreditsResponse = {
  id: number
  cast: MovieCastType[]
  crew: MovieCrew[]
}

export type MovieCreditsParams = {
  params: {
    api_key: string
    language?: string
    movie_id: number
  }
}
