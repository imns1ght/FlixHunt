import React from "react";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableHighlight, View } from "react-native";
import { CONSTANTS } from "../../services/constants";
import styles from "./style";

interface RenderItemProps {
  item: any;
  index: number;
  navigation: any;
}

const MovieCard = ({ item, index, navigation }: RenderItemProps) => {
  return (
    <TouchableHighlight
      key={index}
      onPress={() => {
        navigation.navigate("Movie", {
          movieId: item.id,
          movieName: item.title,
        });
      }}
      activeOpacity={0.6}
      underlayColor="#CCCCCC"
    >
      <View style={styles.card}>
        <Image
          source={{
            uri: `${CONSTANTS.api_image_url}/w342${item.poster_path}`,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardSubBar}>
          <FontAwesome name="star" size={14} color="orange" />
          <Text style={styles.cardSubBarText}>{item.vote_average}</Text>
          <AntDesign name="like1" size={14} color="#dfe3ee" />
          <Text style={styles.cardSubBarText}>{item.vote_count}</Text>
          <MaterialIcons name="date-range" size={14} color="#dfe3ee" />
          <Text style={styles.cardSubBarText}>{item.release_date}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default MovieCard;
