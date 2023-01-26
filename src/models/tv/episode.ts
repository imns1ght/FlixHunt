import { CrewType, GuestStarsType } from '../crew'

export type Episode = {
  air_date: string
  episode_number: number
  crew: CrewType[]
  guest_stars: GuestStarsType[]
  id: number
  name: string
  overview?: string
  production_code: string
  season_number: number
  vote_average: number
  vote_count: number
}
