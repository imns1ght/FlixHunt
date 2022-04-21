import React from 'react'
import { Image, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { MovieSimpleType } from '~/models'
import styles from './MovieCard.styles'
import { NavigationProps } from '~/navigation'
import { getImagePath } from '~/utils'

const MovieCard = ({
  item,
  index,
  disabled = false,
}: {
  item: MovieSimpleType
  index: number
  disabled?: boolean
}) => {
  const navigation = useNavigation<NavigationProps>()

  const onPress = React.useCallback(
    () =>
      navigation.navigate('Movie', {
        movieId: item.id,
        movieName: item.title,
      }),
    [item.id, item.title, navigation]
  )

  return (
    <TouchableHighlight
      key={index}
      onPress={onPress}
      activeOpacity={0.8}
      style={{ ...styles.card, ...(disabled ? styles.disabledCard : {}) }}
      disabled={disabled}
    >
      <Image
        source={{
          uri: getImagePath(item.poster_path, 'w500'),
        }}
        style={styles.image}
      />
    </TouchableHighlight>
  )
}

export default MovieCard
