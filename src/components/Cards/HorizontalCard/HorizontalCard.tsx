import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { MediaSimpleType } from '~/models'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProps } from '~/navigation'
import styles from './HorizontalCard.styles'
import CONSTANTS from '~/constants'
import FastImage from 'react-native-fast-image'
import { CustomText, Rating } from '~/components'

const HorizontalCard = ({ data }: { data: MediaSimpleType }) => {
  const navigation = useNavigation<StackNavigationProps>()
  const isMovie = data.media_type === 'movie' || data.media_type === undefined
  const mediaType = isMovie ? 'movie' : 'tv'
  const releaseData = new Date(
    isMovie ? data.release_date : data.first_air_date
  ).toLocaleDateString()

  const handlePress = () => {
    navigation.navigate('Media', {
      id: data.id,
      title: isMovie ? data.title : data.name,
      mediaType,
    })
  }

  return (
    <TouchableOpacity key={data.id} onPress={() => handlePress()} style={styles.container}>
      <FastImage
        source={{
          uri: `${CONSTANTS.api_image_url}/w300${data.poster_path}`,
        }}
        style={styles.image}
      />
      <View style={styles.rightContainer}>
        <View style={styles.textContainer}>
          <CustomText type='subtitle' numberOfLines={1} bold>
            {isMovie ? data.title : data.name}
          </CustomText>
          <View style={styles.details}>
            <CustomText type='paragraph' numberOfLines={2}>
              {data.overview}
            </CustomText>
            <View style={styles.horizontalInfo}>
              <Rating voteAverage={data.vote_average} voteCount={data.vote_count} />
              <CustomText type='paragraph' style={styles.release}>
                {releaseData}
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default HorizontalCard
