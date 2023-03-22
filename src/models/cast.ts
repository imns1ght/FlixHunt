export type RoleType = {
  credit_id: number
  character: string
  episode_count: number
}

export type CastType = {
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
  roles?: RoleType[]
}
