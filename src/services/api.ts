import axios, { AxiosError } from 'axios'
import CONSTANTS from '~/constants'

import {
  CastType,
  CollectionType,
  MediaFullType,
  MediaSimpleType,
  MovieCreditsParams,
  MovieCreditsResponse,
  MovieParams,
  MovieSimpleType,
  SearchParams,
  SearchResponse,
  TVParams,
  TopRatedParams,
  TopRatedResponse,
  TrendingParams,
  TrendingResponse,
  UpcomingParams,
  UpcomingResponse,
  mediaType,
} from '~/models'
import { DEFAULT_LANGUAGE_CODE, LANGUAGE, LANGUAGE_CODE, REGION } from './localization'

// Used in requests
const axiosInstance = axios.create({
  baseURL: CONSTANTS.api_base_url,
})

type BasicParams = {
  params: {
    api_key: string
    language: string
  }
}

/**
 * Returns a list of popular movies.
 */
const getPopular = async (mediaType: mediaType): Promise<MediaSimpleType[]> => {
  const response = axiosInstance
    .get<TrendingResponse>(`/discover/${mediaType}?sort_by=popularity.desc`, <TrendingParams>{
      params: {
        api_key: CONSTANTS.api_key,
        media_type: mediaType,
        language: LANGUAGE,
        region: REGION,
      },
    })
    .then(response => response.data.results.filter(item => !!item.overview).slice(0, 15))
    .catch((e: Error | AxiosError) => {
      console.error(e)
      throw e
    })

  return response
}

const getTVShowAiringToday = async (): Promise<MediaSimpleType[]> => {
  const response = axiosInstance
    .get<TrendingResponse>('/tv/airing_today', <TrendingParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: LANGUAGE,
      },
    })
    .then(response => response.data.results.filter(item => !!item.overview).slice(0, 15))
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
): Promise<MediaSimpleType[]> => {
  const response = axiosInstance
    .get<TrendingResponse>(`/trending/${mediaType}/${timePeriod}`, <TrendingParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: LANGUAGE,
      },
    })
    .then(response => response.data.results.filter(item => !!item.overview).slice(0, 15))
    .catch((e: Error | AxiosError) => {
      console.error(`${e.name}: ${e.message}`)
      throw e
    })

  return response
}

/**
 * Returns the cast and crew for a movie by id.
 */
const getCast = async (id: number, mediaType: mediaType): Promise<CastType[]> => {
  const endpoint = mediaType === 'tv' ? 'aggregate_credits' : 'credits'
  const response = axiosInstance
    .get<MovieCreditsResponse>(`/${mediaType}/${id}/${endpoint}`, <MovieCreditsParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: LANGUAGE,
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

const getRecommendations = async (id: number, mediaType: mediaType): Promise<MediaSimpleType[]> => {
  const response = axiosInstance
    .get<TopRatedResponse>(`/${mediaType}/${id}/recommendations`, <BasicParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: LANGUAGE,
      },
    })
    .then(response => response.data.results.filter(item => !!item.overview).slice(0, 10))
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
const getTopRated = async (mediaType: mediaType, page?: number): Promise<MediaSimpleType[]> => {
  const response = axiosInstance
    .get<TopRatedResponse>(`/${mediaType}/top_rated`, <TopRatedParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: LANGUAGE,
        region: REGION,
        page: page,
      },
    })
    .then(response => response.data.results.filter(item => !!item.overview).slice(0, 15))
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
const getMovieUpcoming = async (): Promise<MovieSimpleType[]> => {
  const response = axiosInstance
    .get<UpcomingResponse>('/movie/upcoming', <UpcomingParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: LANGUAGE,
        region: REGION,
      },
    })
    .then(response => {
      const filteredByDate = response.data.results.filter(
        movie => new Date(movie.release_date).getTime() >= new Date().getTime()
      )
      const filteredFinal = filteredByDate.filter(movie => !!movie.overview && !!movie.poster_path)
      const sortedDec = filteredFinal.sort(
        (a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
      )
      const sliced = sortedDec.slice(0, 10)

      return sliced
    })
    .catch((e: Error | AxiosError) => {
      console.log(e)
      throw e
    })

  return response
}

const getMovieNowPlaying = async (): Promise<MovieSimpleType[]> => {
  const response = axiosInstance
    .get<UpcomingResponse>('/movie/now_playing', <UpcomingParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: LANGUAGE,
        region: REGION,
      },
    })
    .then(response => response.data.results.filter(item => !!item.overview).slice(0, 15))
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
const getByID = async (id: number, mediaType: mediaType): Promise<MediaFullType> => {
  const response = await axiosInstance
    .get<MediaFullType>(`/${mediaType}/${id}`, <MovieParams | TVParams>{
      params: {
        api_key: CONSTANTS.api_key,
        movie_id: id,
        append_to_response: 'images,videos,watch/providers',
        language: LANGUAGE,
        region: REGION,
        include_image_language: `${LANGUAGE_CODE},${DEFAULT_LANGUAGE_CODE},null`,
        include_video_language: `${LANGUAGE_CODE},${DEFAULT_LANGUAGE_CODE},null`,
      },
    })
    .then(response => ({
      ...response.data,
      media_type: mediaType,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      watch_providers: response.data['watch/providers'],
    }))
    .catch((e: Error | AxiosError) => {
      console.log('error: getByID()', e)
      throw e
    })

  return response
}

const getMovieCollection = async (collectionId: number): Promise<CollectionType> => {
  const response = axiosInstance
    .get<CollectionType>(`/collection/${collectionId}`, <MovieParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: LANGUAGE,
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
const searchByString = async (query: string): Promise<MediaSimpleType[]> => {
  const response = axiosInstance
    .get<SearchResponse>('/search/multi', <SearchParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: LANGUAGE,
        query: query,
      },
    })
    .then(response =>
      response.data.results
        .filter(({ media_type }) => media_type === 'tv' || media_type === 'movie')
        .filter(item => !!item.overview && !!item.poster_path)
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
  getMovieUpcoming,
  getMovieNowPlaying,
  getRecommendations,
  getByID,
  getCast,
  getMovieCollection,
  getTVShowAiringToday,
  searchByString,
}
