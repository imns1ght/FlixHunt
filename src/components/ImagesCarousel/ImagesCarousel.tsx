import React from 'react'
import { ActivityIndicator, Pressable, View } from 'react-native'
import Modal from 'react-native-modal'
import { ImageType } from '~/models'
import { getImagePath } from '~/utils'
import { Section } from '~/components'
import styles from './ImagesCarousel.styles'
import { FlatList } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'

const ImagesCarousel = ({ images }: { images: ImageType[] }) => {
  const [showModal, setShowModal] = React.useState(false)
  const [selectedImage, setSelectedImage] = React.useState<ImageType>()
  const [modalImageLoading, setModalImageLoading] = React.useState(false)

  const renderItem = React.useCallback(
    ({ item }: { item: ImageType }) => (
      <Pressable
        onPress={() => {
          setSelectedImage(item)
          setShowModal(true)
        }}
      >
        <View style={styles.imageContainer}>
          <FastImage
            key={item.file_path}
            source={{
              uri: getImagePath(item.file_path, 'w780'),
            }}
            style={{ ...styles.image }}
          />
        </View>
      </Pressable>
    ),
    []
  )

  return (
    <>
      <Section title='Images' removeMargin>
        <FlatList
          keyExtractor={key => key.file_path}
          data={images}
          renderItem={renderItem}
          initialNumToRender={2}
          maxToRenderPerBatch={3}
          horizontal
        />
      </Section>
      {showModal && (
        <Modal
          isVisible={showModal}
          onBackButtonPress={() => setShowModal(false)}
          onBackdropPress={() => setShowModal(false)}
          hasBackdrop={true}
          style={styles.modal}
        >
          <FastImage
            source={{
              uri: getImagePath(selectedImage?.file_path ?? '', 'w1280'),
            }}
            onLoadStart={() => setModalImageLoading(true)}
            onLoadEnd={() => setModalImageLoading(false)}
            onError={() => setShowModal(false)}
            style={{ ...styles.modalImage, display: modalImageLoading ? 'none' : 'flex' }}
            resizeMode='contain'
          />
          {modalImageLoading && <ActivityIndicator size='large' />}
        </Modal>
      )}
    </>
  )
}

export default ImagesCarousel
