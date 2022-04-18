import { Image, ImageBackground, Text, View } from 'react-native'
import React from 'react'
import CONSTANTS from '~/constants'
import styles from '../MovieScreen.styles'
import { MovieResponse } from '~/models'
import { arrToStringFormated } from '~/utils'

const Header = ({ movieData }: { movieData: MovieResponse }) => {
  return (
    <ImageBackground
      source={{ uri: `${CONSTANTS.api_image_url}/w780${movieData.poster_path}` }}
      style={styles.cover}
      imageStyle={styles.coverImage}
      blurRadius={8}
    >
      <View style={styles.titleWithImage}>
        <Image
          source={{
            uri: `${CONSTANTS.api_image_url}/w780${movieData.poster_path}`,
          }}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.title}>{movieData.title}</Text>
            {!!movieData.tagline && <Text style={styles.subtitle}>{movieData.tagline}</Text>}
          </View>
          <View>
            {!!movieData.genres && (
              <Text style={styles.tags}>{arrToStringFormated(movieData.genres)}</Text>
            )}
            {!!movieData.release_date && (
              <Text style={styles.tags}>{new Date(movieData.release_date).toDateString()}</Text>
            )}
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Header
