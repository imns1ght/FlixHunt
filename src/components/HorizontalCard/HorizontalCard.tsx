import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { MediaSimpleType } from '~/models'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProps } from '~/navigation'
import styles from './HorizontalCard.styles'
import CONSTANTS from '~/constants'

const HorizontalCard = ({ data }: { data: MediaSimpleType }) => {
  const navigation = useNavigation<StackNavigationProps>()
  const isMovie = data.media_type === 'movie' || data.media_type === undefined
  const releaseData = new Date(isMovie ? data.release_date : data.first_air_date).toDateString()

  const handlePress = () => {
    navigation.navigate('Media', {
      id: data.id,
      title: isMovie ? data.title : data.name,
      mediaType: isMovie ? 'movie' : 'tv',
    })
  }

  return (
    <TouchableOpacity key={data.id} onPress={() => handlePress()} style={styles.container}>
      <Image
        source={{
          uri: `${CONSTANTS.api_image_url}/w300${data.poster_path}`,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {isMovie ? data.title : data.name}
        </Text>
        <Text style={styles.overview} numberOfLines={3}>
          {data.overview}
        </Text>
        <Text style={styles.tags}>{releaseData}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HorizontalCard
