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

export type AccountStatesType = {
  id: number
  favorite: boolean
  rated: {
    value: number
  }
  watchlist: false
}

export type MarkFavoriteResponseType = {
  status_code: number
  status_message: string
}
