import { StyleSheet } from "react-native";
import { COLORS } from "../../../style";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 40,
  },
  sectionContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  section: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 20,
    marginHorizontal: 40,
  },
  sectionTitle: {
    color: COLORS.primary,
    fontSize: 26,
  },
  sectionSubTitle: {
    color: COLORS.primary,
    fontSize: 16,
    margin: 10,
  },
  loadMoreButton: {
    marginVertical: 20,
    marginHorizontal: 60,
  },
});

export default styles;
