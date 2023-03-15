import { ImageBackground, View } from 'react-native'
import React from 'react'
import styles from '../MediaScreen.styles'
import { MovieFullType } from '~/models'
import { arrToStringFormated, convertMinsToTime, getImagePath } from '~/utils'
import { CustomText, Rating, WatchButton } from '~/components'
import FastImage from 'react-native-fast-image'
import { DEFAULT_REGION, REGION } from '~/services'

type Props = Pick<
  MovieFullType,
  | 'title'
  | 'poster_path'
  | 'release_date'
  | 'images'
  | 'runtime'
  | 'genres'
  | 'vote_average'
  | 'vote_count'
  | 'watch_providers'
>

const Header = ({
  title,
  poster_path,
  images,
  runtime,
  release_date,
  genres,
  vote_average,
  vote_count,
  watch_providers,
}: Props) => {
  const releaseDate = new Date(release_date).toLocaleDateString()
  const genresFormated = arrToStringFormated(genres)
  const posterPath = getImagePath(poster_path, 'w500')

  const backgroundPath = () => {
    const backdropAvailable = images.backdrops.length > 0
    const filePath = backdropAvailable
      ? images.backdrops[Math.floor(Math.random() * images.backdrops.length)].file_path
      : poster_path

    return getImagePath(filePath, backdropAvailable ? 'w1280' : 'w500')
  }
  const watchLink =
    watch_providers?.results[REGION]?.link ?? watch_providers?.results[DEFAULT_REGION]?.link

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
        <FastImage
          source={{
            uri: posterPath,
          }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <CustomText type='title' numberOfLines={3}>
              {title}
            </CustomText>
          </View>
          <View style={styles.detailsContainer}>
            <CustomText type='paragraph'>{genresFormated}</CustomText>
            <View style={styles.releaseRuntime}>
              <CustomText type='paragraph'>{releaseDate}</CustomText>
              {!!runtime && <CustomText type='paragraph'>{convertMinsToTime(runtime)}</CustomText>}
            </View>
            <Rating voteAverage={vote_average} voteCount={vote_count} />
          </View>
          <WatchButton linkRedirect={watchLink} />
        </View>
      </View>
    </ImageBackground>
  )
}

export default Header
