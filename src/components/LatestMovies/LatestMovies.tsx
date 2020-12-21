import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList, Button } from "react-native";
import { COLORS } from "../../../style";
import { DiscoverMovieResponse } from "../../models/discover/discover-movie";
import { getLatestMoviesByReleaseDate } from "../../services/api";
import { CONSTANTS } from "../../services/constants";
import MovieCard from "../MovieCard/MovieCard";
import styles, { numberGrid } from "./style";

const LatestMovies = () => {
  const [
    latestMoviesData,
    setLatestMoviesData,
  ] = useState<DiscoverMovieResponse>();
  const [requestPage, setRequestPage] = useState<number>(1);
  const navigation = useNavigation();

  useEffect(() => {
    const getResponse = async () => {
      let response = await getLatestMoviesByReleaseDate(requestPage);
      if (latestMoviesData) {
        response.results = [...latestMoviesData.results, ...response.results];
      }

      setLatestMoviesData(response);
    };

    getResponse();
  }, [requestPage]);

  return (
    <>
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{"Last Releases"}</Text>
        </View>
      </View>
      {latestMoviesData ? (
        <FlatList
          keyExtractor={(_, index) => _.id.toString() + index}
          data={latestMoviesData.results.filter((movie) => movie.poster_path)}
          renderItem={({ item, index }) =>
            MovieCard({ item, index, navigation })
          }
          numColumns={numberGrid}
          contentContainerStyle={{
            alignSelf: "center",
          }}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
      <View style={styles.loadMoreButton}>
        <Button
          title="Load more"
          onPress={() => setRequestPage(requestPage + 1)}
          color={COLORS.primary}
        ></Button>
      </View>
    </>
  );
};

export default LatestMovies;
