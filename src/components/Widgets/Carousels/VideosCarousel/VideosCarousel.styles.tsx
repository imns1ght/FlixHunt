import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const viewHeight = 200

const styles = StyleSheet.create({
  dummyView: {
    height: viewHeight,
    backgroundColor: colors.black,
  },
  videoContainer: {
    marginRight: 10,
    aspectRatio: 16 / 9,
    backgroundColor: colors.black,
  },
  youtubePlayer: {
    height: viewHeight,
  },
  modal: {
    margin: 10,
  },
  modalVideoContainer: {
    aspectRatio: 16 / 9,
  },
  modalYoutubePlayer: {
    height: 800,
  },
})

export default styles
