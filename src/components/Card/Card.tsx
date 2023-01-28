import React from 'react'
import { ImageBackground, TouchableHighlight, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { MediaSimpleType } from '~/models'
import styles from './Card.styles'
import { StackNavigationProps } from '~/navigation'
import { getImagePath } from '~/utils'
import { mediaType } from '~/models'
import CustomText from '../CustomText'

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
              <CustomText type='subtitle' numberOfLines={1}>
                {cardTitle}
                Subtitle
              </CustomText>
              <CustomText type='description' numberOfLines={1}>
                {cardSubtitle}
                Description
              </CustomText>
            </View>
          ))}
      </ImageBackground>
    </TouchableHighlight>
  )
}

export default Card
