import React from 'react'
import { ImageBackground, Text, TouchableHighlight, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { MediaSimpleType } from '~/models'
import styles from './Card.styles'
import { StackNavigationProps } from '~/navigation'
import { getImagePath } from '~/utils'
import { mediaType } from '~/models'

const Card = ({
  item,
  mediaType,
  cardTitle,
  cardSubtitle,
  disabled = false,
}: {
  item: MediaSimpleType
  mediaType: mediaType
  disabled?: boolean
  cardTitle?: string
  cardSubtitle?: string
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
      key={item.id}
      onPress={onPress}
      activeOpacity={0.8}
      style={{ ...styles.card, ...(disabled ? styles.disabledCard : {}) }}
      disabled={disabled}
    >
      <ImageBackground
        key={item.id}
        source={{
          uri: getImagePath(item.poster_path, 'w500'),
        }}
        style={styles.card}
      >
        {!!cardTitle ||
          (!!cardSubtitle && (
            <View style={styles.infoContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {cardTitle}
              </Text>
              <Text style={styles.subtitle} numberOfLines={1}>
                {cardSubtitle}
              </Text>
            </View>
          ))}
      </ImageBackground>
    </TouchableHighlight>
  )
}

export default Card
