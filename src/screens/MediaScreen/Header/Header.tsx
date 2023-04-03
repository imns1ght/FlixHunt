import { ImageBackground, View } from 'react-native'
import React, { useId } from 'react'
import styles from '../MediaScreen.styles'
import { MovieFullType } from '~/models'
import { arrToStringFormated, convertMinsToTime, getImagePath } from '~/utils'
import { CustomText, HeaderBar, Rating, Section, WatchButton } from '~/components'
import FastImage from 'react-native-fast-image'
import { API, Authentication, DEFAULT_REGION, REGION } from '~/services'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '~/navigation'
import { IconButtonProps } from '~/components/Buttons/IconButton/IconButton'
import { colors } from '~/styles'
import { translate } from '~/locales'

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
  favorite: boolean
  setFavorite: React.Dispatch<React.SetStateAction<boolean>>
  seasonsCount?: number
}

const Header = ({
  id,
  mediaType,
  title,
  poster_path,
  images,
  runtime,
  release_date,
  genres,
  vote_average,
  vote_count,
  watch_providers,
  userAuthenticated,
  favorite,
  setFavorite,
  seasonsCount,
}: Props) => {
  const releaseDate = new Date(release_date).toLocaleDateString()
  const genresFormated = arrToStringFormated(genres)
  const posterPath = getImagePath(poster_path, 'w500')
  const stackNavigation = useNavigation<StackNavigationProps>()
  const searchScreenId = useId()
  const favoriteScreenId = useId()

  const backgroundPath = React.useMemo(() => {
    const backdropAvailable = images.backdrops.length > 0
    const filePath = backdropAvailable ? images.backdrops[0].file_path : poster_path

    return getImagePath(filePath, backdropAvailable ? 'w1280' : 'w500')
  }, [images.backdrops, poster_path])

  const watchLink =
    watch_providers?.results[REGION]?.link ?? watch_providers?.results[DEFAULT_REGION]?.link

  const markFavorite = React.useCallback(async () => {
    const newFavoriteStatus = !favorite
    const account_id = await Authentication.getAccountId()
    const session_id = await Authentication.getSessionId()
    const response = await API.setFavorite(id, mediaType, newFavoriteStatus, account_id, session_id)
    if (response) setFavorite(newFavoriteStatus)
  }, [favorite, id, mediaType, setFavorite])

  const headerBarCustomButtons: IconButtonProps[] = React.useMemo(() => {
    const items: IconButtonProps[] = [
      {
        name: 'search',
        type: 'Material',
        onPress: () => stackNavigation.navigate('Search', { id: searchScreenId }),
      },
    ]

    if (userAuthenticated) {
      items.push({
        name: favorite ? 'favorite' : 'favorite-outline',
        color: favorite ? colors.pink : colors.white,
        onPress: markFavorite,
        onLongPress: () =>
          stackNavigation.navigate('Favorites', { id: favoriteScreenId, tabFocused: mediaType }),
        type: 'Material',
      })
    }

    return items
  }, [
    userAuthenticated,
    stackNavigation,
    searchScreenId,
    favorite,
    markFavorite,
    favoriteScreenId,
    mediaType,
  ])

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
        <HeaderBar customButtons={headerBarCustomButtons} />
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
                  } ${translate('seasons')}`}</CustomText>
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
