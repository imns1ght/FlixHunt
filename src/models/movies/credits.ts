// Documentation: https://developers.themoviedb.org/3/movies/get-movie-credits

import { CastType } from '../cast'
import { CrewType } from '../crew'

export type MovieCreditsResponse = {
  id: number
  cast: CastType[]
  crew: CrewType[]
}

export type MovieCreditsParams = {
  params: {
    api_key: string
    language?: string
    movie_id: number
  }
}
