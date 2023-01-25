import axios, { AxiosError } from 'axios'
import CONSTANTS from '~/constants'

import {
  MediasType,
  MovieCastType,
  MovieCreditsParams,
  MovieCreditsResponse,
  MovieData,
  MovieParams,
  MovieType,
  SearchParams,
  SearchResponse,
  TopRatedParams,
  TopRatedResponse,
  TrendingParams,
  TrendingResponse,
  UpcomingParams,
  UpcomingResponse,
} from '~/models'
import { Collection } from '~/models/collection/collection'
import { mediaType } from '~/types'

// Used in requests
const axiosInstance = axios.create({
  baseURL: CONSTANTS.api_base_url,
})

/**
 * Returns a list of popular movies.
 */
const getPopular = async (mediaType: mediaType): Promise<MediasType[]> => {
  const response = axiosInstance
    .get<TrendingResponse>(`/discover/${mediaType}?sort_by=popularity.desc`, <TrendingParams>{
      params: {
        api_key: CONSTANTS.api_key,
        media_type: mediaType,
        language: 'en-US',
      },
    })
    .then(response => response.data.results.slice(0, 15))
    .catch((e: Error | AxiosError) => {
      console.error(e)
      throw e
    })

  return response
}

/**
 * Returns a list of trending movies
 */
const getTrending = async (
  timePeriod: 'day' | 'week' = 'week',
  mediaType: mediaType
): Promise<MediasType[]> => {
  const response = axiosInstance
    .get<TrendingResponse>(`/trending/${mediaType}/${timePeriod}`, <TrendingParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: 'en-US',
      },
    })
    .then(response => response.data.results.slice(0, 15))
    .catch((e: Error | AxiosError) => {
      console.error(`${e.name}: ${e.message}`)
      throw e
    })

  return response
}

/**
 * Returns the cast and crew for a movie by id.
 */
const getCast = async (id: number, mediaType: mediaType): Promise<MovieCastType[]> => {
  const response = axiosInstance
    .get<MovieCreditsResponse>(`/${mediaType}/${id}/credits`, <MovieCreditsParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: 'en-US',
        movie_id: id,
      },
    })
    .then(response => response.data.cast)
    .catch((e: Error | AxiosError) => {
      console.error(`${e.name}: ${e.message}`)
      throw e
    })

  return response
}

/**
 * Returns a list of movies top rated
 *
 * @param page Page number
 * @returns List of movies top rated
 */
const getTopRated = async (mediaType: mediaType, page?: number): Promise<MediasType[]> => {
  const response = axiosInstance
    .get<TopRatedResponse>(`/${mediaType}/top_rated`, <TopRatedParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: 'en-US',
        page: page,
      },
    })
    .then(response => response.data.results.slice(0, 15))
    .catch((e: Error | AxiosError) => {
      console.log('error: getMoviesTopRated()', e)
      throw e
    })

  return response
}

/**
 * Returns a list of upcoming movies
 *
 * @param page Page number
 * @returns List of movies top rated
 */
const getUpcoming = async (): Promise<MovieType[]> => {
  const response = axiosInstance
    .get<UpcomingResponse>('/movie/upcoming', <UpcomingParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: 'en-US',
      },
    })
    .then(response => response.data.results.slice(0, 10))
    .catch((e: Error | AxiosError) => {
      console.log(e)
      throw e
    })

  return response
}

/**
 * Returns a movie by ID
 *
 * @param id The movie id
 * @returns Media with the id provided in the param
 */
const getByID = async (id: number, mediaType: mediaType): Promise<MovieData> => {
  const response = await axiosInstance
    .get<MovieData>(`/${mediaType}/${id}`, <MovieParams>{
      params: {
        api_key: CONSTANTS.api_key,
        movie_id: id,
        append_to_response: 'images,videos',
      },
    })
    .then(response => response.data)
    .catch((e: Error | AxiosError) => {
      console.log('error: getByID()', e)
      throw e
    })

  return response
}

const getMovieCollection = async (collectionId: number): Promise<Collection> => {
  const response = await axiosInstance
    .get<Collection>(`/collection/${collectionId}`, <MovieParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: 'en-US',
        collection_id: collectionId,
      },
    })
    .then(response => response.data)
    .catch((e: Error | AxiosError) => {
      console.error(e)
      throw e
    })

  return response
}

/**
 * Returns a list of movies or tv shows based in the query provided in params
 *
 * @param query string to search
 * @returns List of movies or tv shows based in the query provided in params
 */
const searchByString = async (query: string): Promise<MediasType[]> => {
  const response = await axiosInstance
    .get<SearchResponse>('/search/multi', <SearchParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: 'en-US',
        query: query,
      },
    })
    .then(response =>
      response.data.results.filter(
        ({ media_type }) => media_type === 'tv' || media_type === 'movie'
      )
    )
    .catch((e: Error | AxiosError) => {
      console.log('error: searchByString()', e)
      throw e
    })

  return response
}

export default {
  getTrending,
  getPopular,
  getTopRated,
  getUpcoming,
  getByID,
  getCast,
  getMovieCollection,
  searchByString,
}
