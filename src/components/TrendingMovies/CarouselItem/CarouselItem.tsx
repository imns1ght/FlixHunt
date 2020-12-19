import React from "react";
import MovieSimpleInterface from "../../../models/movie-simple";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableHighlight, View } from "react-native";
import { CONSTANTS } from "../../../services/constants";
import styles from "../style";

interface RenderItemProps {
  item: MovieSimpleInterface;
  index: number;
}

const CarouselItem = ({ item, index }: RenderItemProps) => {
  return (
    <TouchableHighlight
      onPress={() => window.alert("Clicked in " + (index + 1))}
    >
      <View
        style={{
          height: 550,
          width: 350,
          padding: 35,
          marginLeft: 5,
          marginRight: 5,
        }}
      >
        <Image
          source={{
            uri: `${CONSTANTS.api_image_url}/w780${item.poster_path}`,
          }}
          style={styles.cardImage}
        />
        <View
          style={{
            backgroundColor: "rgb(12, 27, 41)",
            borderRadius: 6,
            flex: 1,
            flexDirection: "row",
            position: "absolute",
            justifyContent: "center",
            alignItems: "baseline",
            right: 25,
            bottom: 15,
            paddingHorizontal: 6,
            paddingVertical: 5,
          }}
        >
          <Ionicons
            name="heart-sharp"
            size={22}
            color="white"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.cardTextVotes}>{item.vote_average}</Text>
          <Fontisto
            name="like"
            size={20}
            color="white"
            style={{
              alignSelf: "flex-start",
              marginTop: 1,
              marginLeft: 12,
              marginRight: 10,
            }}
          />
          <Text style={styles.cardTextVotes}>{item.vote_count}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default CarouselItem;
