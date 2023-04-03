import axios, { AxiosError } from 'axios'
import CONSTANTS from '~/constants'

import {
  AccountStatesType,
  AccountType,
  CastType,
  CollectionType,
  MarkFavoriteResponseType,
  MediaFullType,
  MediaSimpleType,
  MovieCreditsParams,
  MovieCreditsResponse,
  MovieSimpleType,
  SearchParams,
  SearchResponse,
  TopRatedParams,
  TopRatedResponse,
  TrendingResponse,
  UpcomingResponse,
  createGuestSessionResponse,
  createRequestTokenResponse,
  createSessionResponse,
  createSessionWithLoginResponse,
  mediaType,
} from '~/models'
import { DEFAULT_LANGUAGE_CODE, LANGUAGE, LANGUAGE_CODE, REGION } from './localization'

// Used in requests
const axiosInstance = axios.create({
  baseURL: CONSTANTS.api_base_url,
  params: {
    api_key: CONSTANTS.api_key,
    language: LANGUAGE,
    region: REGION,
  },
})

/**
 * Returns a list of popular movies.
 */
const getPopular = async (
  mediaType: mediaType,
  filters?: Record<string, string | number>
): Promise<MediaSimpleType[]> => {
  const response = axiosInstance
    .get<TrendingResponse>(`/discover/${mediaType}`, {
      params: {
        media_type: mediaType,
        region: REGION,
        language: LANGUAGE,
        sort_by: 'popularity.desc',
        'vote_count.gte': '150',
        ...filters,
      },
    })
    .then(response =>
      response.data.results.map(item => ({
        ...item,
        media_type: mediaType,
      }))
    )
    .catch((e: Error | AxiosError) => {
      console.error(e)
      throw e
    })

  return response
}

const getTVShowAiringToday = async (): Promise<MediaSimpleType[]> => {
  const response = axiosInstance
    .get<TrendingResponse>('/tv/airing_today', {
      params: {
        sort_by: 'popularity.desc',
        'vote_count.gte': '100',
        'vote_average.gte': '5',
      },
    })
    .then(response => response.data.results.filter(item => !!item.overview))
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
    .get<TrendingResponse>(`/trending/${mediaType}/${timePeriod}`)
    .then(response => response.data.results.filter(item => !!item.overview))
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

const getRecommendationsById = async (
  id: number,
  mediaType: mediaType
): Promise<MediaSimpleType[]> => {
  const response = axiosInstance
    .get<TopRatedResponse>(`/${mediaType}/${id}/recommendations`)
    .then(response => response.data.results.filter(item => !!item.overview))
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
const getTopRated = async (media_type: mediaType, page?: number): Promise<MediaSimpleType[]> => {
  const response = axiosInstance
    .get<TopRatedResponse>(`/${media_type}/top_rated`, <TopRatedParams>{
      params: {
        page: page,
      },
    })
    .then(response =>
      response.data.results.map(item => ({
        ...item,
        media_type: media_type,
      }))
    )
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
    .get<UpcomingResponse>('/movie/upcoming')
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
    .get<UpcomingResponse>('/movie/now_playing')
    .then(response => response.data.results.filter(item => !!item.overview))
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
const getByID = async (
  id: number,
  mediaType: mediaType,
  session_id?: string
): Promise<MediaFullType> => {
  const response = await axiosInstance
    .get<MediaFullType>(`/${mediaType}/${id}`, {
      params: {
        movie_id: id,
        session_id,
        append_to_response: 'images,videos,watch/providers,account_states',
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
    .get<CollectionType>(`/collection/${collectionId}`, {
      params: {
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

/**  This is a temporary token that is required to ask the user for permission to access their account.
 * This token will auto expire after 60 minutes if it's not used. */
const createRequestToken = async () => {
  const response = axiosInstance
    .get<createRequestTokenResponse>('/authentication/token/new')
    .then(response => response.data)
    .catch((e: Error | AxiosError) => {
      console.log(e)
      throw e
    })

  return response
}

const createGuestSession = async () => {
  const response = axiosInstance
    .get<createGuestSessionResponse>('/authentication/guest_session/new')
    .then(response => response.data)
    .catch((e: Error | AxiosError) => {
      console.log(e)
      throw e
    })

  return response
}

const createSession = async (requestToken: string) => {
  const response = axiosInstance
    .post<createSessionResponse>('/authentication/session/new', { request_token: requestToken })
    .then(response => response.data)
    .catch((e: Error | AxiosError) => {
      console.log(e)
      throw e
    })

  return response
}

const createSessionWithLogin = async (username: string, password: string, requestToken: string) => {
  const response = axiosInstance
    .post<createSessionWithLoginResponse>('authentication/token/validate_with_login', {
      username: username,
      password: password,
      request_token: requestToken,
    })
    .then(response => response.data)
    .catch((e: Error | AxiosError) => {
      console.log(e)
      throw e
    })

  return response
}

const getAccountDetails = async (sessionId: string) => {
  const response = axiosInstance
    .get<AccountType>('/account', {
      params: {
        session_id: sessionId,
      },
    })
    .then(response => response.data)
    .catch((e: Error | AxiosError) => {
      console.log(e)
      throw e
    })

  return response
}

const getFavorites = async (
  account_id: string,
  session_id: string,
  media_type: mediaType
): Promise<MediaSimpleType[]> => {
  const response = axiosInstance
    .get<TrendingResponse>(
      `/account/${account_id}/favorite/${media_type === 'movie' ? 'movies' : 'tv'}`,
      {
        params: {
          session_id,
          sort_by: 'created_at.desc',
        },
      }
    )
    .then(response =>
      response.data.results.map(item => ({
        ...item,
        media_type,
      }))
    )
    .catch((e: Error | AxiosError) => {
      console.error(`${e.name}: ${e.message}`)
      throw e
    })

  return response
}

const getAccountStates = async (
  id: number,
  mediaType: mediaType,
  session_id?: string,
  guest_session_id?: string
): Promise<AccountStatesType> => {
  const response = axiosInstance
    .get<AccountStatesType>(`/${mediaType}/${id}/account_states`, {
      params: {
        session_id,
        guest_session_id,
      },
    })
    .then(response => response.data)
    .catch((e: Error | AxiosError) => {
      console.error(`${e.name}: ${e.message}`)
      throw e
    })

  return response
}

const setFavorite = async (
  media_id: number,
  media_type: mediaType,
  favorite: boolean,
  account_id: string,
  session_id: string
) => {
  const response = axiosInstance
    .post<MarkFavoriteResponseType>(
      `/account/${account_id}/favorite`,
      { media_type, media_id, favorite },
      { params: { session_id } }
    )
    .then(response => response.data)
    .catch((e: Error | AxiosError) => {
      console.log(e)
      throw e
    })

  return response
}

export default {
  setFavorite,
  getAccountStates,
  getAccountDetails,
  createRequestToken,
  createGuestSession,
  createSession,
  createSessionWithLogin,
  getTrending,
  getPopular,
  getTopRated,
  getMovieUpcoming,
  getMovieNowPlaying,
  getRecommendationsById,
  getByID,
  getCast,
  getMovieCollection,
  getTVShowAiringToday,
  searchByString,
  getFavorites,
}
