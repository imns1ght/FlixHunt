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
  coverImage: { opacity: 0.4, backgroundColor: '#000' },
  image: {
    height: 200,
    width: 140,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginLeft: 10,
    marginRight: 15,
  },
  titleWithImage: {
    flexDirection: 'row',
  },
  tagsContainer: {
    flex: 1,
    paddingRight: 10,
  },
  titleContainer: {
    marginBottom: 5,
  },
  content: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  subtitle: {
    fontSize: 20,
    fontStyle: 'italic',
    color: colors.white,
  },
  overview: {
    fontSize: 18,
    color: colors.white,
    paddingVertical: 10,
  },
  tags: {
    fontSize: 16,
    color: colors.white,
    marginVertical: 2,
  },
  collapsible: {
    marginVertical: 3,
  },
  textCollapsible: {
    fontSize: 16,
    color: colors.gray,
  },
  releaseRuntime: {
    flexDirection: 'row',
    columnGap: 15,
  },
})

export default styles
