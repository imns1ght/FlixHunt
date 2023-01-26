import { Image, ImageBackground, Text, View } from 'react-native'
import React from 'react'
import styles from '../MediaScreen.styles'
import { MovieFullType } from '~/models'
import { arrToStringFormated, convertMinsToTime, getImagePath } from '~/utils'

type Props = Pick<
  MovieFullType,
  'tagline' | 'title' | 'poster_path' | 'release_date' | 'images' | 'runtime' | 'genres'
>

const Header = ({ tagline, title, poster_path, images, runtime, release_date, genres }: Props) => {
  const releaseDate = new Date(release_date).toLocaleDateString().slice(3)
  const genresFormated = arrToStringFormated(genres)
  const posterPath = getImagePath(poster_path, 'w500')

  const backgroundPath = () => {
    const backdropAvailable = images.backdrops.length > 0
    const filePath = backdropAvailable
      ? images.backdrops[Math.floor(Math.random() * images.backdrops.length)].file_path
      : poster_path

    return getImagePath(filePath, backdropAvailable ? 'w1280' : 'w500')
  }

  return (
    <ImageBackground
      source={{
        uri: backgroundPath(),
      }}
      style={styles.cover}
      imageStyle={styles.coverImage}
      blurRadius={8}
    >
      <View style={styles.titleWithImage}>
        <Image
          source={{
            uri: posterPath,
          }}
          style={styles.image}
        />
        <View style={styles.tagsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            {!!tagline && <Text style={styles.subtitle}>{tagline}</Text>}
          </View>
          <View>
            <Text style={styles.tags}>{genresFormated}</Text>
            <View style={{ flexDirection: 'row', columnGap: 10 }}>
              <Text style={styles.tags}>{releaseDate}</Text>
              {!!runtime && <Text style={styles.tags}>{convertMinsToTime(runtime)}</Text>}
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Header
