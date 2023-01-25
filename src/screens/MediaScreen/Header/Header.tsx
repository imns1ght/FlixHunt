import { Image, ImageBackground, Text, View } from 'react-native'
import React from 'react'
import styles from '../MediaScreen.styles'
import { MovieResponse } from '~/models'
import { arrToStringFormated, getImagePath } from '~/utils'

const Header = ({ movieData }: { movieData: MovieResponse }) => {
  const { tagline, title, name, poster_path, images } = movieData
  const releaseDate = React.useMemo(
    () => new Date(movieData.release_date ?? movieData.first_air_date).toDateString(),
    [movieData.first_air_date, movieData.release_date]
  )
  const genres = React.useMemo(() => arrToStringFormated(movieData.genres), [movieData.genres])
  const productionCompanies = React.useMemo(
    () => !!movieData.production_companies && arrToStringFormated(movieData.production_companies),
    [movieData.production_companies]
  )

  const backgroundPath = React.useMemo(() => {
    const backdropAvailable = images.backdrops.length > 0
    const filePath = backdropAvailable
      ? images.backdrops[Math.floor(Math.random() * images.backdrops.length)].file_path
      : poster_path

    return getImagePath(filePath, backdropAvailable ? 'w1280' : 'w500')
  }, [images.backdrops, poster_path])

  const posterPath = React.useMemo(() => getImagePath(poster_path, 'w500'), [poster_path])

  return (
    <ImageBackground
      source={{
        uri: backgroundPath,
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
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.title}>{title ?? name}</Text>
            {!!tagline && <Text style={styles.subtitle}>{tagline}</Text>}
          </View>
          <View>
            <Text style={styles.tags}>{genres}</Text>
            <Text style={styles.tags}>{releaseDate}</Text>
            <Text style={styles.tags} numberOfLines={2}>
              {productionCompanies}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Header
