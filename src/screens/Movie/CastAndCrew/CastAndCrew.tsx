import React, { useEffect, useState } from "react";
import { SectionList, Image, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  MovieCast,
  MovieCreditsResponse,
  MovieCrew,
} from "../../../models/movies/movie-credits";
import { getMovieCastAndCrew } from "../../../services/api";
import { CONSTANTS } from "../../../services/constants";
import styles from "./style";

interface Props {
  movie_id: number;
}

const CastAndCrew = ({ movie_id }: Props) => {
  const [
    castAndCrewData,
    setCastAndCrewData,
  ] = useState<MovieCreditsResponse>();

  useEffect(() => {
    const getResponse = async () => {
      let response = await getMovieCastAndCrew(movie_id);
      setCastAndCrewData(response);
    };

    getResponse();
  }, []);

  const shouldRender = () => {
    return castAndCrewData ? true : false;
  };

  return (
    <>
      {shouldRender() && (
        <View style={styles.container}>
          <Text style={styles.title}>Cast</Text>
          <View style={styles.grid}>
            {castAndCrewData!.cast.slice(0, 15).map((person, index) => {
              return (
                <View key={person.credit_id} style={styles.card}>
                  <Image
                    source={{
                      uri: `${CONSTANTS.api_image_url}/w185${person.profile_path}`,
                    }}
                    style={styles.image}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.name}>{person.name}</Text>
                    <Text style={styles.description}>
                      as {person.character}
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.description}>
                        {person.popularity}
                      </Text>
                      <FontAwesome name="star" size={18} color="orange" />
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
          <Text style={styles.title}>Crew</Text>
          <View style={styles.grid}>
            {castAndCrewData!.crew.slice(0, 10).map((person, index) => {
              return (
                <View key={person.credit_id} style={styles.card}>
                  <Image
                    source={{
                      uri: `${CONSTANTS.api_image_url}/w185${person.profile_path}`,
                    }}
                    style={styles.image}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.name}>
                      {person.name}
                    </Text>
                    <Text style={styles.description}>
                      {person.job}
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.description}>
                        {person.popularity}
                      </Text>
                      <FontAwesome
                        name="star"
                        size={18}
                        color="orange"
                      />
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </>
  );
};

export default CastAndCrew;
