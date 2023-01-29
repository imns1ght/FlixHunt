import React from 'react'
import { ImageBackground, TouchableHighlight, View } from 'react-native'
import { getImagePath } from '~/utils'
import { CustomText } from '~/components'
import styles from './Card.styles'

const Card = ({
  id,
  imagePath,
  title,
  subtitle,
  onPress,
  disabled = false,
}: {
  id: number
  imagePath: string
  title?: string
  subtitle?: string
  onPress?: () => void
  disabled?: boolean
}) => {
  return (
    <TouchableHighlight
      key={id}
      onPress={onPress}
      style={{ ...styles.card, ...(disabled ? styles.disabledCard : {}) }}
      disabled={disabled}
    >
      <ImageBackground
        key={id}
        source={{
          uri: getImagePath(imagePath, 'w500'),
        }}
        style={styles.card}
      >
        {(!!title || !!subtitle) && (
          <View style={styles.infoContainer}>
            <CustomText type='paragraph' bold numberOfLines={1}>
              {title}
            </CustomText>
            <CustomText type='paragraph' numberOfLines={1}>
              {subtitle}
            </CustomText>
          </View>
        )}
      </ImageBackground>
    </TouchableHighlight>
  )
}

export default Card
