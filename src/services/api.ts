import axios from "axios";
import {
  DiscoverMovieParams,
  DiscoverMovieResponse,
} from "../models/discover/discover-movie";
import { MovieParams, MovieResponse } from "../models/movies/movie";
import {
  MoviesTopRatedParams,
  MoviesTopRatedResponse,
} from "../models/movies/movies-top-rated";
import {
  SearchMovieParams,
  SearchMovieResponse,
} from "../models/search/search-movie";
import { TrendingParams, TrendingResponse } from "../models/trending/trending";
import { CONSTANTS } from "./constants";

const getCurrentDate = () => {
  const currentDate = new Date();
  const currentDateApiPattern =
    currentDate.getFullYear() +
    "-" +
    currentDate.getMonth() +
    "-" +
    currentDate.getDate();
  return currentDateApiPattern;
};

// Used in requests
const axiosInstance = axios.create({
  baseURL: CONSTANTS.api_base_url,
});

/**
 * Returns a list of the most recent movies sorted by release date in descending order
 *
 * @param page The number of the page
 * @returns List of the most recent movies sorted by release date in desc order
 */
export const getLatestMoviesByReleaseDate = async (
  page?: number
): Promise<DiscoverMovieResponse> => {
  const response = await axiosInstance
    .get<DiscoverMovieResponse>("/discover/movie", <DiscoverMovieParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: "en-US",
        include_adult: false,
        sort_by: "release_date.desc",
        "release_date.lte": getCurrentDate(),
        page: page || 1,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((response) => {
      console.log("error: getLatestMoviesByReleaseDate()", response.err);
      return response.err;
    });

  return response;
};

/**
 * Returns a movie by ID
 *
 * @param movie_id The movie id
 * @returns Movie with the id provided in the param
 */
export const getMovieByID = async (
  movie_id: number
): Promise<MovieResponse> => {
  const response = await axiosInstance
    .get<MovieResponse>(`/movie/${movie_id}`, <MovieParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: "en-US",
        movie_id: movie_id,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((response) => {
      console.log("error: getMovieByID()", response.err);
      return response.err;
    });

  return response;
};

/**
 * Returns a list of movies top rated
 *
 * @param page Page number
 * @returns List of movies top rated
 */
export const getMoviesTopRated = async (
  page?: number
): Promise<MoviesTopRatedResponse> => {
  const response = await axiosInstance
    .get<MoviesTopRatedResponse>("/movie/top_rated", <MoviesTopRatedParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: "en-US",
        page: page,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((response) => {
      console.log("error: getMoviesTopRated()", response.err);
      return response.err;
    });

  return response;
};

/**
 * Returns a list of trending movies
 *
 * @param time_window filter in 'day' or 'week'
 * @returns List of trending movies in a day or week
 */
export const getTrendingMovies = async (
  time_window: string
): Promise<TrendingResponse> => {
  const response = await axiosInstance
    .get<TrendingResponse>(`/trending/movie/${time_window}`, <TrendingParams>{
      params: {
        api_key: CONSTANTS.api_key,
        media_type: "movie",
        time_window: time_window,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((response) => {
      console.log("error: getTrendingMovies()", response.err);
      return response.err;
    });

  return response;
};

/**
 * Returns a list of movies based in the query provided in params
 *
 * @param query Movie to search
 * @returns List of movies based in the query provided in params
 */
export const searchByMovie = async (
  query: string
): Promise<SearchMovieResponse> => {
  const response = await axiosInstance
    .get<SearchMovieResponse>("/search/movie", <SearchMovieParams>{
      params: {
        api_key: CONSTANTS.api_key,
        language: "en-US",
        query: query,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((response) => {
      console.log("error: searchByMovie()", response.err);
      return response.err;
    });

  return response;
};
