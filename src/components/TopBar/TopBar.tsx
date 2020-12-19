import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CONSTANTS } from "../../services/constants";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Movie Browser</Text>
      <Text style={styles.textGeneric}>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    marginTop: CONSTANTS.statusBarHeight,
    height: 62,
    flexDirection: "row", // row
    backgroundColor: "#0F1F2E",
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 30,
    paddingRight: 30,
  },
  textTitle: {
    fontFamily: "sans-serif",
    fontSize: 24,
    fontWeight: "700",
    color: "white",
  },
  textGeneric: {
    fontSize: 18,
    color: "white",
  },
});

export default TopBar;
