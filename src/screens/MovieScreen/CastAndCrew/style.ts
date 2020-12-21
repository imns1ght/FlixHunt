import { StyleSheet } from "react-native";

const MARGIN_H_DEFAULT = 15;
const MARGIN_V_DEFAULT = 15;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginBottom: 40,
  },
  grid: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "flex-start",
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    marginHorizontal: MARGIN_H_DEFAULT,
    marginVertical: MARGIN_V_DEFAULT,
  },
  textContainer: {
    margin: 5,
    flexShrink: 1,
  },
  name: {
    fontSize: 20,
    color: "black",
  },
  description: {
    fontSize: 16,
    color: "black",
    flexShrink: 1,
    margin: 5,
  },
  image: {
    height: 300,
    width: 200,
    borderRadius: 10,
    backgroundColor: "#FFF",
  },
  card: {
    padding: 10,
    maxWidth: 220,
  },
});

export default styles;
