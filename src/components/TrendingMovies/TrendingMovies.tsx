import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { TrendingResponse } from "../../models/trending/trending";
import { getTrendingMovies } from "../../services/api";
import { CONSTANTS } from "../../services/constants";
import MovieItem from "../MovieItem/MovieItem";
import styles from "./style";

interface Props {
  time_window: string;
}

const TrendingMovies = ({ time_window }: Props) => {
  const [
    trendingMoviesData,
    setTrendingMoviesdata,
  ] = useState<TrendingResponse>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const getResponse = async () => {
      const response = await getTrendingMovies(time_window);
      setTrendingMoviesdata(response);
      console.log("response: ", response);
    };

    getResponse();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending</Text>
          <Text style={styles.sectionSubTitle}>{time_window}</Text>
        </View>
        {trendingMoviesData ? (
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
                data={trendingMoviesData!.results}
                sliderWidth={CONSTANTS.width}
                sliderHeight={300}
                itemHeight={300}
                itemWidth={220}
                firstItem={trendingMoviesData.results.length / 2}
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

export default TrendingMovies;
