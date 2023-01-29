import React from 'react'
import { View } from 'react-native'
import { AirbnbRating } from 'react-native-ratings'
import { CustomText } from '..'
import styles from './Rating.styles'

const Rating = ({ voteAverage, voteCount }: { voteAverage: number; voteCount: number }) => {
  return (
    <View style={styles.container}>
      <AirbnbRating
        defaultRating={Math.ceil(voteAverage / 2)}
        count={5}
        reviews={['Terrible', 'Bad', 'OK', 'Good', 'Amazing']}
        size={20}
        isDisabled={true}
        showRating={false}
      />
      <CustomText type='paragraph'>{voteCount.toLocaleString()} Votes</CustomText>
    </View>
  )
}

export default Rating
