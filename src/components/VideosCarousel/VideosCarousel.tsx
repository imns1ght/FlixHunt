import React from 'react'
import { FlatList, Pressable, View, useWindowDimensions } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
import Modal from 'react-native-modal'
import { Section } from '~/components'
import { MovieVideo } from '~/models'
import styles from './VideosCarousel.styles'

const VideosCarousel = ({ videos }: { videos: MovieVideo[] }) => {
  const { width: viewportWidth } = useWindowDimensions()
  const [showModal, setShowModal] = React.useState(false)
  const [selectedVideo, setSelectedVideo] = React.useState<MovieVideo>()

  const videosSortedByTrailerFirst = React.useMemo(
    () =>
      videos.sort((a, b) => {
        if (a.type === 'Trailer') return -1
        if (b.type === 'Trailer') return 1
        return 0
      }),
    [videos]
  )

  const closeModal = () => setShowModal(false)

  const renderItem = React.useCallback(
    ({ item }: { item: MovieVideo }) => (
      <Pressable
        onPress={() => {
          setShowModal(true)
          setSelectedVideo(item)
        }}
      >
        <View style={styles.videoContainer} pointerEvents='none'>
          <YoutubePlayer
            key={item.key}
            height={styles.youtubePlayer.height}
            width={viewportWidth}
            play={false}
            videoId={item.key}
          />
        </View>
      </Pressable>
    ),
    [viewportWidth]
  )

  return (
    <>
      <Section title='Videos' removeMargin>
        <FlatList
          data={videosSortedByTrailerFirst}
          renderItem={renderItem}
          maxToRenderPerBatch={3}
          initialNumToRender={2}
          horizontal
        />
      </Section>
      <Modal
        hasBackdrop={true}
        isVisible={showModal}
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
        style={styles.modal}
      >
        <YoutubePlayer
          height={styles.modalYoutubePlayer.height}
          play={true}
          videoId={selectedVideo?.key}
        />
      </Modal>
    </>
  )
}

export default VideosCarousel
