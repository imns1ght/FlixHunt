import React from 'react'
import { FlatList, Pressable, View } from 'react-native'
import Modal from 'react-native-modal'
import { ImageType } from '~/models'
import { getImagePath } from '~/utils'
import { CustomActivityIndicator, Section } from '~/components'
import styles from './ImagesCarousel.styles'
import FastImage from 'react-native-fast-image'
import { useTranslation } from 'react-i18next'

const ImagesCarousel = ({ images }: { images: ImageType[] }) => {
  const { t } = useTranslation();
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
      <Section title={t('images')} removeHorizontalMargin>
        <FlatList
          keyExtractor={key => key.file_path}
          data={images}
          renderItem={renderItem}
          initialNumToRender={2}
          maxToRenderPerBatch={3}
          showsHorizontalScrollIndicator={false}
          windowSize={3}
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
          {modalImageLoading && <CustomActivityIndicator size='large' />}
        </Modal>
      )}
    </>
  )
}

export default ImagesCarousel
