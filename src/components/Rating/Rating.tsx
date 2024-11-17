import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useTranslation } from 'react-i18next'
import { CustomText } from '..'
import styles from './Rating.styles'

const Rating = ({ voteAverage, voteCount }: { voteAverage: number; voteCount: number }) => {
  const { t } = useTranslation();

  return (
    <View>
      <View style={styles.container}>
        <Icon name='star' size={18} color={styles.icon.color} />
        <CustomText type='paragraph' bold>
          {voteAverage.toPrecision(2)}
        </CustomText>
        <CustomText type='paragraph' style={styles.voteAverageMax}>
          /10
        </CustomText>
      </View>
      <CustomText type='paragraph' style={styles.voteCount}>
        {`${voteCount.toLocaleString()} ${t('votes')}`}
      </CustomText>
    </View>
  )
}

export default Rating
