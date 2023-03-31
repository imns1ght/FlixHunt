export type AccountType = {
  avatar: {
    gravatar: {
      hash: string
    }
    tmdb: {
      avatar_path: string
    }
  }
  id: number
  iso_639_1: string
  iso_3166_1: string
  name: string
  include_adult: boolean
  username: string
}
