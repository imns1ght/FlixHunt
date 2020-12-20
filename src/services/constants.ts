import { Dimensions, StatusBar } from "react-native";

export const { height, width } = Dimensions.get("window");
export const tabBarHeight = 54;

export const CONSTANTS = {
  api_base_url: "https://api.themoviedb.org/3",
  api_image_url: "https://image.tmdb.org/t/p",
  api_key: `3977028d418452ab5ad05c8bb732a7e0`,
  cardsHeight: '30rem',
  cardsWidth: '20rem',
  width: width,
  height: height - tabBarHeight * 2,
  statusBarHeight: StatusBar.currentHeight,
};
