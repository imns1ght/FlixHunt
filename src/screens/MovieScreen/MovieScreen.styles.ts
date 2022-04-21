import { StyleSheet } from 'react-native'
import theme from '~/styles'

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollview: {
    flexGrow: 1,
    backgroundColor: theme.colors.secondary,
    paddingBottom: 10,
  },
  cover: {
    height: 250,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  coverImage: { opacity: 0.4, backgroundColor: '#000' },
  image: {
    height: 200,
    width: 140,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 15,
  },
  titleWithImage: {
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginRight: 10,
  },
  content: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  subtitle: {
    fontSize: 20,
    fontStyle: 'italic',
    color: theme.colors.white,
  },
  overview: {
    fontSize: 18,
    color: theme.colors.white,
    paddingVertical: 10,
  },
  tags: {
    fontSize: 16,
    color: theme.colors.white,
    marginVertical: 2,
  },
  collapsible: {
    marginVertical: 3,
  },
  textCollapsible: {
    fontSize: 16,
    color: theme.colors.gray,
  },
})

export default styles
