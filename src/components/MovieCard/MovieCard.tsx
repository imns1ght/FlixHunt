import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: '100%',
    height: 'auto',
  },
  stretch: {
    width: '100%',
    height: 'auto',
  },
});

const MovieCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={{
          uri:
            "https://images-na.ssl-images-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg",
        }}
      />
    </View>
  );
};

export default MovieCard;
