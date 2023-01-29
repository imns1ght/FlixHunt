import { MovieSimpleType } from '..'

export type CollectionType = {
  id: number
  name: string
  overview: string
  backdrop_path: string | null
  parts: MovieSimpleType[]
}

export type BelongsToCollectionType = {
  backdrop_path: string | null
  id: number
  name: string
  poster_path: string | null
}
