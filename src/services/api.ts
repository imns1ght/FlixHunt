import axios, { AxiosError } from 'axios'
import CONSTANTS from '~/constants'

import {
  MovieCastType,
  MovieCreditsParams,
  MovieCreditsResponse,
  MovieParams,
  MovieResponse,
  MovieSimpleType,
  MoviesTopRatedParams,
  MoviesTopRatedResponse,
  SearchMovieParams,
  SearchMovieResponse,
  TrendingParams,
  TrendingResponse,
} from '~/models'

// Used in requests
const axiosInstance = axios.create({
  baseURL: CONSTANTS.api_base_url,
})

/**
 * Returns a list of trending movies
 */
export const getTrendingMovies = async (
  timePeriod: 'day' | 'week'
): Promise<MovieSimpleType[] | undefined> => {
  return axiosInstance
    .get<TrendingResponse>(`/trending/movie/${timePeriod}`, <TrendingParams>{
      params: {
        api_key: CONSTANTS.api_key,
      },
    })
    .then(response => response.data.results)
    .catch((err: Error | AxiosError) => {
      console.error(`${err.name}: ${err.message}`)
      return undefined
    })
}

/**
 * Returns the cast and crew for a movie by id.
 */
export const getMovieCast = async (movieId: number): Promise<MovieCastType[] | undefined> => {
  return axiosInstance
    .get<MovieCreditsResponse>(`/movie/${movieId}/credits`, <MovieCreditsParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: 'en-US',
        movie_id: movieId,
      },
    })
    .then(response => response.data.cast)
    .catch((err: Error | AxiosError) => {
      console.error(`${err.name}: ${err.message}`)
      return undefined
    })
}

/**
 * Returns a movie by ID
 *
 * @param movie_id The movie id
 * @returns Movie with the id provided in the param
 */
export const getMovieByID = async (movie_id: number): Promise<MovieResponse> => {
  const response = await axiosInstance
    .get<MovieResponse>(`/movie/${movie_id}`, <MovieParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: 'en-US',
        movie_id: movie_id,
      },
    })
    .then(response => {
      return response.data
    })
    .catch(response => {
      console.log('error: getMovieByID()', response.err)
      return response.err
    })

  return response
}

/**
 * Returns a list of movies top rated
 *
 * @param page Page number
 * @returns List of movies top rated
 */
export const getMoviesTopRated = async (page?: number): Promise<MoviesTopRatedResponse> => {
  const response = await axiosInstance
    .get<MoviesTopRatedResponse>('/movie/top_rated', <MoviesTopRatedParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: 'en-US',
        page: page,
      },
    })
    .then(response => {
      return response.data
    })
    .catch(response => {
      console.log('error: getMoviesTopRated()', response.err)
      return response.err
    })

  return response
}

/**
 * Returns a list of movies based in the query provided in params
 *
 * @param query Movie to search
 * @returns List of movies based in the query provided in params
 */
export const searchByMovie = async (query: string): Promise<SearchMovieResponse> => {
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
    .catch(response => {
      console.log('error: searchByMovie()', response.err)
      return response.err
    })

  return response
}

export default {
  getTrendingMovies,
  getMovieCast,
  searchByMovie,
}

// import { DiscoverMovieParams, DiscoverMovieResponse } from '~/models/discover/discover-movie'

// const getCurrentDate = () => {
//   const currentDate = new Date()
//   const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0')
//   const currentDay = currentDate.getDate().toString().padStart(2, '0')
//   const currentDateApiPattern = `${currentDate.getFullYear()}-${currentMonth}-${currentDay}`

//   return currentDateApiPattern
// }

// /**
//  * Returns a list of the most recent movies sorted by release date in descending order
//  *
//  * @param page The number of the page
//  * @returns List of the most recent movies sorted by release date in desc order
//  */
// export const getLatestMoviesByReleaseDate = async (
//   page?: number
// ): Promise<DiscoverMovieResponse | undefined> => {
//   const response = await axiosInstance
//     .get<DiscoverMovieResponse>('/discover/movie', <DiscoverMovieParams>{
//       params: {
//         api_key: CONSTANTS.api_key,
//         language: 'en-US',
//         include_adult: false,
//         sort_by: 'release_date.desc',
//         'release_date.lte': getCurrentDate(),
//         page,
//       },
//     })
//     .then(response => response.data)
//     .catch(error => {
//       console.error(error)
//       return undefined
//     })

//   console.log(response)

//   return response
// }
