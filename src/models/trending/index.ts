// Documentation: https://developers.themoviedb.org/3/trending/get-trending

import { MediaSimpleType } from '../medias'

export type TrendingResponse = {
  page: number
  results: MediaSimpleType[]
  total_pages: number
  total_results: number
}
