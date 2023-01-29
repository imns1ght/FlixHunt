import React from 'react'
import { View } from 'react-native'
import { CustomText } from '~/components'
import styles from './Section.styles'

const Section = ({
  title,
  removeMargin = false,
  children,
}: {
  title?: string
  removeMargin?: boolean
  children: React.ReactNode
}) => {
  const containerStyle = title
    ? styles.container
    : { ...styles.container, ...styles.containerWithoutTitle }
  const contentStyle = removeMargin
    ? { ...styles.content, ...styles.contentWithoutMargin }
    : styles.content

  return (
    <View style={containerStyle}>
      <View style={styles.titleContainer}>
        {!!title && <CustomText type='title'>{title}</CustomText>}
      </View>
      <View style={contentStyle}>{children}</View>
    </View>
  )
}

export default Section
