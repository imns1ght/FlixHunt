import React from 'react'
import { FlatList, Image, View, useWindowDimensions } from 'react-native'
import { ImageType, ImagesType } from '~/models'
import { getImagePath } from '~/utils'
import styles from './ImagesCarousel.styles'

const ImagesCarousel = ({ movieId, images }: { movieId: number; images: ImagesType }) => {
  const { width: viewportWidth } = useWindowDimensions()

  const renderItem = React.useCallback(
    ({ item, index }: { item: ImageType; index: number }) => {
      return (
        <Image
          key={index}
          source={{
            uri: getImagePath(item.file_path, 'w1280'),
          }}
          style={{ ...styles.image, width: viewportWidth }}
        />
      )
    },
    [viewportWidth]
  )

  return (
    <View style={styles.container}>
      <FlatList
        key={movieId}
        data={images.backdrops}
        renderItem={renderItem}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        removeClippedSubviews
        horizontal
      />
    </View>
  )
}

export default ImagesCarousel
