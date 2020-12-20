import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../style";
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
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 30,
    paddingRight: 30,
  },
  textTitle: {
    fontFamily: "sans-serif",
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.secondary,
  },
  textGeneric: {
    fontSize: 18,
    color: COLORS.secondary,
  },
});

export default TopBar;
