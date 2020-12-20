import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import FeaturedMovies from "../components/FeaturedMovies/FeaturedMovies";
import LatestMovies from "../components/LatestMovies/LatestMovies";
import styles from "./style";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <FeaturedMovies category="trending" time_window="day" />
      <FeaturedMovies category="trending" time_window="week" />
      <FeaturedMovies category="toprated" />
      <LatestMovies />
    </ScrollView>
  );
};

export default HomeScreen;
