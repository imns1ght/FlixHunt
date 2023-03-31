import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 15,
    alignItems: 'center',
  },
  innerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  innerContainerCentered: {
    maxWidth: 1080,
  },
  containerWithoutTitle: {
    paddingTop: 5,
  },
  titleContainer: {
    paddingHorizontal: 15,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
    rowGap: 10,
  },
  contentWithoutHorizontalMargin: {
    paddingHorizontal: 0,
  },
  containerWithoutVerticalMargin: {
    paddingTop: 0,
  },
  contentWithoutGap: {
    rowGap: 0,
  },
})

export default styles
