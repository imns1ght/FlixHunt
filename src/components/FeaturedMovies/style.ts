import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  section: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 20,
  },
  sectionTitle: {
    color: "#393e46",
    fontWeight: "bold",
    fontSize: 26,
  },
  sectionSubTitle: {
    color: "#393e46",
    fontSize: 16,
    margin: 10,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    borderRadius: 8,
  },
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
