import axios, { AxiosError } from 'axios'
import CONSTANTS from '~/constants'

import {
  MovieCastType,
  MovieCreditsParams,
  MovieCreditsResponse,
  MovieData,
  MovieParams,
  MovieSimpleType,
  MovieVideo,
  MovieVideosParams,
  MovieVideosResponse,
  MoviesTopRatedParams,
  MoviesTopRatedResponse,
  SearchMovieParams,
  SearchMovieResponse,
  TrendingParams,
  TrendingResponse,
} from '~/models'
import { Collection } from '~/models/collection/collection'

// Used in requests
const axiosInstance = axios.create({
  baseURL: CONSTANTS.api_base_url,
})

/**
 * Returns a list of popular movies.
 */
const getPopularMovies = async (): Promise<MovieSimpleType[]> => {
  return axiosInstance
    .get<TrendingResponse>('/discover/movie?sort_by=popularity.desc', <TrendingParams>{
      params: {
        api_key: CONSTANTS.api_key,
      },
    })
    .then(response => response.data.results)
    .catch((e: Error | AxiosError) => {
      console.error(e)
      throw e
    })
}

/**
 * Returns a list of trending movies
 */
const getTrendingMovies = async (
  timePeriod: 'day' | 'week' = 'week'
): Promise<MovieSimpleType[]> => {
  return axiosInstance
    .get<TrendingResponse>(`/trending/movie/${timePeriod}`, <TrendingParams>{
      params: {
        api_key: CONSTANTS.api_key,
      },
    })
    .then(response => response.data.results)
    .catch((e: Error | AxiosError) => {
      console.error(`${e.name}: ${e.message}`)
      throw e
    })
}

/**
 * Returns the cast and crew for a movie by id.
 */
const getMovieCast = async (movieId: number): Promise<MovieCastType[]> => {
  return axiosInstance
    .get<MovieCreditsResponse>(`/movie/${movieId}/credits`, <MovieCreditsParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: 'en-US',
        movie_id: movieId,
      },
    })
    .then(response => response.data.cast)
    .catch((e: Error | AxiosError) => {
      console.error(`${e.name}: ${e.message}`)
      throw e
    })
}

/**
 * Returns a list of movies top rated
 *
 * @param page Page number
 * @returns List of movies top rated
 */
const getTopRatedMovies = async (page?: number): Promise<MovieSimpleType[]> => {
  return axiosInstance
    .get<MoviesTopRatedResponse>('/movie/top_rated', <MoviesTopRatedParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: 'en-US',
        page: page,
      },
    })
    .then(response => {
      return response.data.results
    })
    .catch((e: Error | AxiosError) => {
      console.log('error: getMoviesTopRated()', e)
      throw e
    })
}

/**
 * Returns a list of movies top rated
 *
 * @param page Page number
 * @returns List of movies top rated
 */
const getUpcoming = async (): Promise<MovieSimpleType[]> => {
  return axiosInstance
    .get<MoviesTopRatedResponse>('/movie/upcoming', <MoviesTopRatedParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: 'en-US',
      },
    })
    .then(response => {
      return response.data.results
    })
    .catch((e: Error | AxiosError) => {
      console.log(e)
      throw e
    })
}

/**
 * Returns a movie by ID
 *
 * @param movie_id The movie id
 * @returns Movie with the id provided in the param
 */
const getMovieByID = async (movie_id: number): Promise<MovieData> => {
  const response = await axiosInstance
    .get<MovieData>(`/movie/${movie_id}`, <MovieParams>{
      params: {
        api_key: CONSTANTS.api_key,
        movie_id: movie_id,
        append_to_response: 'images,videos',
      },
    })
    .then(response => {
      return response.data
    })
    .catch((e: Error | AxiosError) => {
      console.log('error: getMovieByID()', e)
      throw e
    })

  return response
}

/**
 * Returns a list of popular movies.
 */
const getMovieVideos = async (movie_id: number): Promise<MovieVideo[]> => {
  return axiosInstance
    .get<MovieVideosResponse>(`/movie/${movie_id}/videos`, <MovieVideosParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: 'en-US',
      },
    })
    .then(response => response.data.results.filter(video => video.site === 'YouTube'))
    .catch((e: Error | AxiosError) => {
      console.error(e)
      throw e
    })
}

const getCollection = async (collectionId: number): Promise<Collection> => {
  const response = await axiosInstance
    .get<Collection>(`/collection/${collectionId}`, <MovieParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: 'en-US',
        collection_id: collectionId,
      },
    })
    .then(response => {
      return response.data
    })
    .catch((e: Error | AxiosError) => {
      console.error(e)
      throw e
    })

  return response
}

/**
 * Returns a list of movies based in the query provided in params
 *
 * @param query Movie to search
 * @returns List of movies based in the query provided in params
 */
const searchByMovie = async (query: string): Promise<SearchMovieResponse> => {
  const response = await axiosInstance
    .get<SearchMovieResponse>('/search/movie', <SearchMovieParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: 'en-US',
        query: query,
      },
    })
    .then(response => {
      return response.data
    })
    .catch((e: Error | AxiosError) => {
      console.log('error: searchByMovie()', e)
      throw e
    })

  return response
}

export default {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcoming,
  getMovieByID,
  getMovieVideos,
  getMovieCast,
  getCollection,
  searchByMovie,
}
