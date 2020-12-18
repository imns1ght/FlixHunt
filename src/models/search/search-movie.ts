// Documentation: https://developers.themoviedb.org/3/search/search-movies

import MovieSimpleInterface from "../movie-simple";

export interface SearchMovieResponse {
  page: number;
  results: MovieSimpleInterface[];
  top_results: number;
  total_pages: number;
}

export interface SearchMovieParams {
  params: {
    api_key: string;
    language?: string;
    query: string;
    page?: number;
    include_adult?: boolean;
    region?: string;
    year?: number;
    primary_release_year?: number;
  };
}
