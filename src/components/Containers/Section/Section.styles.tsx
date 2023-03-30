import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 15,
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
  contentWithoutMargin: {
    paddingHorizontal: 0,
  },
})

export default styles
