import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { MoviesTopRatedResponse } from "../../models/movies/movies-top-rated";
import { TrendingResponse } from "../../models/trending/trending";
import { getMoviesTopRated, getTrendingMovies } from "../../services/api";
import { CONSTANTS } from "../../services/constants";
import MovieItem from "../MovieItem/MovieItem";
import styles from "./style";

interface Props {
  category: string;
  time_window?: string;
}

const FeaturedMovies = ({ category, time_window }: Props) => {
  const [
    trendingMoviesData,
    setTrendingMoviesdata,
  ] = useState<TrendingResponse>();
  const [
    topRatedMoviesData,
    setTopRatedMoviesData,
  ] = useState<MoviesTopRatedResponse>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const getResponse = async () => {
      let response;
      if (category === "trending") {
        response = await getTrendingMovies(time_window!);
        setTrendingMoviesdata(response);
      } else if (category === "toprated") {
        response = await getMoviesTopRated();
        setTopRatedMoviesData(response);
      }

      console.log("response: ", response);
    };

    getResponse();
  }, []);

  const getCategoryData = () => {
    if (category === "trending") {
      return trendingMoviesData;
    } else if (category === "toprated") {
      return topRatedMoviesData;
    } else {
      return null;
    }
  };

  const getSectionTitle = () => {
    if (category === "trending") {
      return "Trending";
    } else if (category === "toprated") {
      return "Top Rated";
    } else {
      return "Error";
    }
  };

  const getFirstItem = () => {
    if (category === "trending") {
      return getCategoryData()!.results.length / 2;
    } else {
      return 1;
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{getSectionTitle()}</Text>
          <Text style={styles.sectionSubTitle}>{time_window}</Text>
        </View>
        {trendingMoviesData || topRatedMoviesData ? (
          <ScrollView>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Carousel
                layout={"default"}
                activeSlideAlignment={"center"}
                inactiveSlideOpacity={0.9}
                inactiveSlideScale={1}
                activeAnimationType="decay"
                loop={true}
                ref={carouselRef}
                data={getCategoryData()!.results}
                sliderWidth={CONSTANTS.width}
                sliderHeight={300}
                itemHeight={300}
                itemWidth={220}
                firstItem={getFirstItem()}
                renderItem={MovieItem}
                onSnapToItem={(index: number) => setActiveIndex(index)}
              />
            </View>
          </ScrollView>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    </SafeAreaView>
  );
};

export default FeaturedMovies;
