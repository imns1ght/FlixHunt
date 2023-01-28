import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollview: {
    flexGrow: 1,
    backgroundColor: colors.secondary,
    paddingBottom: 10,
  },
  cover: {
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    paddingTop: 15,
  },
  coverImage: {
    opacity: 0.4,
    backgroundColor: colors.black,
  },
  image: {
    height: 220,
    aspectRatio: '2/3',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginLeft: 5,
    marginRight: 10,
  },
  titleWithImage: {
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flex: 1,
    rowGap: 2,
  },
  titleContainer: {
    marginBottom: 5,
  },
  content: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  collapsible: {
    marginVertical: 3,
  },
  releaseRuntime: {
    flexDirection: 'row',
    columnGap: 10,
  },
})

export default styles
