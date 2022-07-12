import React from 'react'
import { FlatList, Image, Pressable, View, useWindowDimensions } from 'react-native'
import Modal from 'react-native-modal'
import ImageZoom from 'react-native-image-pan-zoom'
import { ImageType, ImagesType } from '~/models'
import { getImagePath } from '~/utils'
import { Section } from '~/components'
import styles from './ImagesCarousel.styles'

const ImagesCarousel = ({ images }: { images: ImagesType }) => {
  const { height: viewportHeight, width: viewportWidth } = useWindowDimensions()
  const [showModal, setShowModal] = React.useState(false)
  const [selectedImage, setSelectedImage] = React.useState<ImageType>()

  const renderItem = React.useCallback(
    ({ item }: { item: ImageType }) => (
      <Pressable
        onPress={() => {
          setSelectedImage(item)
          setShowModal(true)
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            key={item.file_path}
            source={{
              uri: getImagePath(item.file_path, 'w780'),
            }}
            style={{ ...styles.image, width: viewportWidth }}
          />
        </View>
      </Pressable>
    ),
    [viewportWidth]
  )

  return (
    <>
      <Section title='Images' removeMargin>
        <FlatList
          data={images.backdrops}
          renderItem={renderItem}
          initialNumToRender={3}
          maxToRenderPerBatch={5}
          removeClippedSubviews
          horizontal
        />
      </Section>
      {showModal && (
        <Modal
          isVisible={showModal}
          onBackButtonPress={() => setShowModal(false)}
          hasBackdrop={true}
          style={styles.modal}
        >
          <ImageZoom
            cropWidth={viewportWidth}
            cropHeight={viewportHeight}
            imageWidth={viewportWidth}
            imageHeight={styles.image.height}
          >
            <Image
              source={{
                uri: getImagePath(selectedImage?.file_path ?? '', 'w1280'),
              }}
              style={styles.image}
              resizeMode='contain'
            />
          </ImageZoom>
        </Modal>
      )}
    </>
  )
}

export default ImagesCarousel
