import { StyleSheet } from "react-native";
import { CONSTANTS } from "../../services/constants";

const MARGIN_H_DEFAULT = 15;
const MARGIN_V_DEFAULT = 15;
const MAX_WIDTH = CONSTANTS.width < 900 ? CONSTANTS.width : 900;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignContent: "flex-start",
    alignSelf: "center",
    width: MAX_WIDTH,
    padding: 10,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: MARGIN_V_DEFAULT,
  },
  itemTextContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginVertical: MARGIN_V_DEFAULT,
  },
  itemTitle: {
    flex: 1,
    fontSize: 24,
    color: "black",
    marginHorizontal: MARGIN_H_DEFAULT + 5,
    marginBottom: MARGIN_V_DEFAULT,
  },
  overview: {
    overflow: "hidden",
    fontSize: 16,
    color: "black",
    marginHorizontal: MARGIN_H_DEFAULT + 5,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    marginHorizontal: MARGIN_H_DEFAULT,
    marginVertical: MARGIN_V_DEFAULT,
  },
  tags: {
    fontSize: 14,
    color: "black",
    marginLeft: MARGIN_H_DEFAULT + 5,
    marginVertical: MARGIN_V_DEFAULT,
  },
  image: {
    height: 250,
    width: 170,
    borderRadius: 3,
    backgroundColor: "#FFF",
  },
});

export default styles;
