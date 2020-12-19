import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import TopBar from "./src/components/TopBar/TopBar";
import TrendingMovies from "./src/components/TrendingMovies/TrendingMovies";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView>
        <TopBar />
        <View style={styles.container}>
          <TrendingMovies time_window={"week"} />
          <TrendingMovies time_window={"day"} />
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
