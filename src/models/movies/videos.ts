export type MovieVideo = {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}

export type MovieVideosResponse = {
  id: number
  results: MovieVideo[]
}

export interface MovieVideosParams {
  params: {
    api_key: string
    language?: string
  }
}
