import { MediasType } from '../medias'

export interface SearchResponse {
  page: number
  results: MediasType[]
  total_results: number
  total_pages: number
}

export interface SearchParams {
  params: {
    api_key: string
    language?: string
    query: string
    page?: number
    include_adult?: boolean
    region?: string
  }
}
