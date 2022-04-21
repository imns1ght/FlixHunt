import { MovieSimpleType } from '..'

export type Collection = {
  id: number
  name: string
  overview: string
  backdrop_path: string | null
  parts: MovieSimpleType[]
}
