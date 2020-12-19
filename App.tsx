import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import TopBar from "./src/components/TopBar/TopBar";
import FeaturedMovies from "./src/components/FeaturedMovies/FeaturedMovies";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopBar />
        <View style={styles.container}>
          <FeaturedMovies category="toprated" />
          <FeaturedMovies category="trending" time_window="week" />
          <FeaturedMovies category="trending" time_window="day" />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#050B10",
  },
});
