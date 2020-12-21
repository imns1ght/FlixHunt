import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
} from "react-native";
import MovieSimpleInterface from "../../models/movie-simple";
import { MovieResponse } from "../../models/movies/movie";
import { MoviesTopRatedResponse } from "../../models/movies/movies-top-rated";
import { TrendingResponse } from "../../models/trending/trending";
import Movie from "../../screens/Movie/Movie";
import { getMoviesTopRated, getTrendingMovies } from "../../services/api";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./style";

interface Props {
  category: string;
  time_window?: string;
}

const FeaturedMovies = ({ category, time_window }: Props) => {
  const [
    trendingMoviesData,
    setTrendingMoviesdata,
  ] = useState<TrendingResponse>();
  const [
    topRatedMoviesData,
    setTopRatedMoviesData,
  ] = useState<MoviesTopRatedResponse>();
  const navigation = useNavigation();

  useEffect(() => {
    const getResponse = async () => {
      let response;
      if (category === "trending") {
        response = await getTrendingMovies(time_window!);
        setTrendingMoviesdata(response);
      } else if (category === "toprated") {
        response = await getMoviesTopRated();
        setTopRatedMoviesData(response);
      }
    };

    getResponse();
  }, []);

  const getCategoryData = () => {
    if (category === "trending" && trendingMoviesData) {
      return trendingMoviesData;
    } else if (category === "toprated" && topRatedMoviesData) {
      return topRatedMoviesData;
    } else {
      return null;
    }
  };

  const getSectionTitle = () => {
    if (category === "trending") {
      return "Trending";
    } else if (category === "toprated") {
      return "Top Rated";
    } else {
      return "Error";
    }
  };

  const shouldRender = () => {
    if (!getCategoryData()) {
      return false;
    }

    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{getSectionTitle()}</Text>
        <Text style={styles.sectionSubTitle}>{time_window}</Text>
      </View>
      {shouldRender() ? (
        <FlatList
          keyExtractor={(_, index) => _.id.toString() + index}
          data={getCategoryData()?.results.slice(0, 10)}
          renderItem={({ item, index }) =>
            MovieCard({ item, index, navigation })
          }
          extraData={navigation}
          horizontal
          contentContainerStyle={{
            alignSelf: "center",
          }}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};

export default FeaturedMovies;
