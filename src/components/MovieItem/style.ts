import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    zIndex: -90,
    borderRadius: 5,
  },
  cardText: {
    position: "absolute",
    bottom: 15,
    left: 25,
    fontSize: 50,
    fontWeight: "bold",
    elevation: 1,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: "#FFF",
  },
  cardTextVotes: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default styles;
