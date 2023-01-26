import { Episode } from './episode'

export type Season = {
  air_date: string
  episode_count?: number
  episodes?: Episode[]
  id: number
  name: string
  overview?: string
  poster_path: string
  season_number: number
}
