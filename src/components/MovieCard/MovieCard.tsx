import React from "react";
import MovieSimpleInterface from "../../models/movie-simple";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableHighlight, View } from "react-native";
import { CONSTANTS } from "../../services/constants";
import styles from "./style";
import { MovieResponse } from "../../models/movies/movie";

interface RenderItemProps {
  item: MovieSimpleInterface | MovieResponse;
  index: number;
}

const MovieCard = ({ item, index }: RenderItemProps) => {
  return (
    <TouchableHighlight
      key={index}
      onPress={() => {
        window.alert("Movie: " + item.title);
      }}
    >
      <View style={styles.card}>
        <Image
          source={{
            uri: `${CONSTANTS.api_image_url}/w780${item.poster_path}`,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardSubBar}>
          <Ionicons name="heart-sharp" size={12} color="white" />
          <Text style={styles.cardSubBarText}>{item.vote_average}</Text>
          <AntDesign name="like1" size={10} color="white" />
          <Text style={styles.cardSubBarText}>{item.vote_count}</Text>
          <MaterialIcons name="date-range" size={12} color="white" />
          <Text style={styles.cardSubBarText}>{item.release_date}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default MovieCard;
