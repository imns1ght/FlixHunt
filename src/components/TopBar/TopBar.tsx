import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedbackBase,
  View,
} from "react-native";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textGeneric}>Menu</Text>
      <Text style={styles.textTitle}>Movie Browser</Text>
      <Text style={styles.textGeneric}>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 62,
    flexDirection: "row", // row
    backgroundColor: "#0F1F2E",
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 30,
    paddingRight: 30,
  },
  textTitle: {
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
