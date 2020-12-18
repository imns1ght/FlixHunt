// Documentation: https://developers.themoviedb.org/3/trending/get-trending

import MovieSimpleInterface from "../movie-simple";

export interface TrendingResponse {
  page: number;
  results: MovieSimpleInterface[];
  total_pages: number;
  total_results: number;
}

export interface TrendingParams {
  params: {
    api_key: string;
    media_type: string;
    time_window: string;
  };
}
