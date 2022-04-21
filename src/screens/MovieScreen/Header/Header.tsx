import { Image, ImageBackground, Text, View } from 'react-native'
import React from 'react'
import styles from '../MovieScreen.styles'
import { MovieResponse } from '~/models'
import { arrToStringFormated, convertMinsToTime, getImagePath } from '~/utils'

const Header = ({ movieData }: { movieData: MovieResponse }) => {
  const { tagline, title, poster_path, images } = movieData
  const releaseDate = React.useMemo(
    () => new Date(movieData.release_date).toDateString(),
    [movieData.release_date]
  )
  const genres = React.useMemo(() => arrToStringFormated(movieData.genres), [movieData.genres])
  const runtime = React.useMemo(() => convertMinsToTime(movieData.runtime), [movieData.runtime])
  const productionCompanies = React.useMemo(
    () => !!movieData.production_companies && arrToStringFormated(movieData.production_companies),
    [movieData.production_companies]
  )

  const backgroundPath = React.useMemo(() => {
    const backdropAvailable = images.backdrops.length > 0
    console.log({ backdropAvailable })
    const filePath = backdropAvailable
      ? images.backdrops[Math.floor(Math.random() * images.backdrops.length)].file_path
      : poster_path

    return getImagePath(filePath, backdropAvailable ? 'w1280' : 'w500')
  }, [images.backdrops, poster_path])

  const posterPath = React.useMemo(() => getImagePath(poster_path, 'w500'), [poster_path])

  console.log({ backgroundPath, posterPath })

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
            <Text style={styles.title}>{title}</Text>
            {!!tagline && <Text style={styles.subtitle}>{tagline}</Text>}
          </View>
          <View>
            <Text style={styles.tags}>{genres}</Text>
            <Text style={styles.tags}>{releaseDate}</Text>
            <Text style={styles.tags}>Duration: {runtime}</Text>
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
