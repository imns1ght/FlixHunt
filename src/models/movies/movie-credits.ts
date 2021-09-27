// Documentation: https://developers.themoviedb.org/3/movies/get-movie-credits

export interface MovieCast {
  adult: boolean
  gender?: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export interface MovieCrew {
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

export interface MovieCreditsResponse {
  id: number
  cast: MovieCast[]
  crew: MovieCrew[]
}

export interface MovieCreditsParams {
  params: {
    api_key: string
    language?: string
    movie_id: number
  }
}
