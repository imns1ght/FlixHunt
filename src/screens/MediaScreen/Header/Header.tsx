import { ImageBackground, View } from 'react-native'
import React from 'react'
import styles from '../MediaScreen.styles'
import { MovieFullType } from '~/models'
import { arrToStringFormated, convertMinsToTime, getImagePath } from '~/utils'
import { CustomText, Rating, Section, WatchButton } from '~/components'
import FastImage from 'react-native-fast-image'
import { DEFAULT_REGION, REGION } from '~/services'
import { useTranslation } from 'react-i18next'

type Props = Pick<
  MovieFullType,
  | 'id'
  | 'title'
  | 'poster_path'
  | 'release_date'
  | 'images'
  | 'runtime'
  | 'genres'
  | 'vote_average'
  | 'vote_count'
  | 'watch_providers'
> & {
  mediaType: 'tv' | 'movie'
  userAuthenticated: boolean
  favoriteStatus: boolean
  seasonsCount?: number
}

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
  seasonsCount,
}: Props) => {
  const { t } = useTranslation();

  const releaseDate = new Date(release_date).toLocaleDateString()
  const genresFormated = arrToStringFormated(genres)
  const posterPath = getImagePath(poster_path, 'w500')

  const backgroundPath = React.useMemo(() => {
    const backdropAvailable = images.backdrops.length > 0
    const filePath = backdropAvailable ? images.backdrops[0].file_path : poster_path

    return getImagePath(filePath, backdropAvailable ? 'w1280' : 'w500')
  }, [images.backdrops, poster_path])

  const watchLink =
    watch_providers?.results[REGION]?.link ?? watch_providers?.results[DEFAULT_REGION]?.link

  return (
    <ImageBackground
      source={{
        uri: backgroundPath,
      }}
      style={styles.cover}
      imageStyle={styles.coverImage}
      blurRadius={8}
    >
      <Section removeHorizontalMargin removeVerticalMargin removeGap>
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
                {!!runtime && (
                  <CustomText type='paragraph'>{convertMinsToTime(runtime)}</CustomText>
                )}
                {!!seasonsCount && (
                  <CustomText type='paragraph'>{`${
                    seasonsCount < 10 ? `0${seasonsCount}` : seasonsCount
                  } ${t('seasons')}`}</CustomText>
                )}
              </View>
              <Rating voteAverage={vote_average} voteCount={vote_count} />
            </View>
            <WatchButton linkRedirect={watchLink} />
          </View>
        </View>
      </Section>
    </ImageBackground>
  )
}

export default Header
