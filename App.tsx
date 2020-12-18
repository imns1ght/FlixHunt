import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Linking, ScrollView, StyleSheet, Text, View } from "react-native";
import MovieCard from "./src/components/MovieCard/MovieCard";
import TopBar from "./src/components/TopBar/TopBar";
import { DiscoverMovieResponse } from "./src/models/discover/discover-movie";
import { getLatestMoviesByReleaseDate } from "./src/services/api";

export default function App() {
  const [
    latestMoviesByReleaseDate,
    setLatestMoviesByReleaseDate,
  ] = useState<DiscoverMovieResponse>();

  useEffect(() => {
    const getResponse = async () => {
      const response = await getLatestMoviesByReleaseDate();
      setLatestMoviesByReleaseDate(response);
      console.log("response: ", response);
    };

    getResponse();
  }, []);

  return (
    <>
      <TopBar />
      <View style={styles.container}>
        <MovieCard />
        <StatusBar style="auto" />
        <Text style={{ color: "white" }}>
          {latestMoviesByReleaseDate?.page}
        </Text>
        <Text style={{ color: "white" }}>
          {latestMoviesByReleaseDate?.total_pages}
        </Text>
        <View style={styles.container}>
          {latestMoviesByReleaseDate?.results.map((movie, index) => {
            return (
              <Text key={index} style={{ color: "white" }}>
                {movie.title}
              </Text>
            );
          })}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B10",
    alignItems: "center",
    justifyContent: "center",
  },
});
