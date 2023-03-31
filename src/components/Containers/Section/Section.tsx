import React from 'react'
import { View, ViewStyle } from 'react-native'
import { CustomText } from '~/components'
import styles from './Section.styles'

const Section = ({
  title,
  removeHorizontalMargin = false,
  removeVerticalMargin = false,
  removeGap = false,
  centered = false,
  children,
}: {
  title?: string
  removeHorizontalMargin?: boolean
  removeVerticalMargin?: boolean
  removeGap?: boolean
  children: React.ReactNode
  centered?: boolean
}) => {
  const containerStyle: ViewStyle[] = [styles.container]
  const innerContainerStyle: ViewStyle[] = [styles.innerContainer]
  const contentStyle: ViewStyle[] = [styles.content]
  if (!title) containerStyle.push(styles.containerWithoutTitle)

  if (removeVerticalMargin) {
    containerStyle.push(styles.containerWithoutVerticalMargin)
    if (!title) contentStyle.push(styles.containerWithoutVerticalMargin)
  }
  if (removeHorizontalMargin) contentStyle.push(styles.contentWithoutHorizontalMargin)
  if (removeGap) contentStyle.push(styles.contentWithoutGap)
  if (centered) innerContainerStyle.push(styles.innerContainerCentered)

  return (
    <View style={containerStyle}>
      <View style={innerContainerStyle}>
        <View style={{ flexGrow: 1 }}>
          <View style={styles.titleContainer}>
            {!!title && <CustomText type='title'>{title}</CustomText>}
          </View>
          <View style={contentStyle}>{children}</View>
        </View>
      </View>
    </View>
  )
}

export default Section
