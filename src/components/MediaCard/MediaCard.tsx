import React from 'react'
import { Image, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { MediaSimpleType } from '~/models'
import styles from './MediaCard.styles'
import { StackNavigationProps } from '~/navigation'
import { getImagePath } from '~/utils'
import { mediaType } from '~/models'

const MediaCard = ({
  item,
  index,
  mediaType,
  disabled = false,
}: {
  item: MediaSimpleType
  index: number
  mediaType: mediaType
  disabled?: boolean
}) => {
  const navigation = useNavigation<StackNavigationProps>()
  const isMovie =
    item.media_type === 'movie' || (item.media_type === undefined && mediaType === 'movie')

  const onPress = () => {
    navigation.navigate('Media', {
      id: item.id,
      title: isMovie ? item.title : item.name,
      mediaType,
    })
  }

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

export default MediaCard
