import React from 'react'
import { ActivityIndicator, FlatList, Pressable, View } from 'react-native'
const YoutubePlayer = React.lazy(() => import('react-native-youtube-iframe'))
import Modal from 'react-native-modal'
import { Section } from '~/components'
import { VideoType } from '~/models'
import styles from './VideosCarousel.styles'

const VideosCarousel = ({ videos }: { videos: VideoType[] }) => {
  const [showModal, setShowModal] = React.useState(false)
  const [selectedVideo, setSelectedVideo] = React.useState<VideoType>()

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
    ({ item }: { item: VideoType }) => (
      <Pressable
        onPress={() => {
          setShowModal(true)
          setSelectedVideo(item)
        }}
      >
        <View style={styles.videoContainer} pointerEvents='none'>
          <React.Suspense fallback={<ActivityIndicator size='large' />}>
            <YoutubePlayer
              key={item.key}
              height={styles.youtubePlayer.height}
              play={false}
              videoId={item.key}
            />
          </React.Suspense>
        </View>
      </Pressable>
    ),
    []
  )

  return (
    <>
      <Section title='Videos' removeMargin>
        <FlatList
          keyExtractor={key => key.id.toString()}
          data={videosSortedByTrailerFirst}
          renderItem={renderItem}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          horizontal
        />
      </Section>
      {showModal && (
        <Modal
          hasBackdrop={true}
          isVisible={showModal}
          onBackdropPress={closeModal}
          onBackButtonPress={closeModal}
          style={styles.modal}
        >
          <View style={styles.modalVideoContainer}>
            <React.Suspense fallback={<ActivityIndicator size='large' />}>
              <YoutubePlayer
                height={styles.modalYoutubePlayer.height}
                play={true}
                videoId={selectedVideo?.key}
              />
            </React.Suspense>
          </View>
        </Modal>
      )}
    </>
  )
}

export default VideosCarousel
