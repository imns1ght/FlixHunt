import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { TrendingResponse } from "../../models/trending/trending";
import { getTrendingMovies } from "../../services/api";
import CarouselItem from "./CarouselItem/CarouselItem";
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
  const ref = useRef(null);

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
        {trendingMoviesData && (
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
                ref={ref}
                data={trendingMoviesData!.results}
                sliderWidth={400}
                sliderHeight={550}
                itemWidth={350}
                renderItem={CarouselItem}
                onSnapToItem={(index: number) => setActiveIndex(index)}
              />
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default TrendingMovies;
