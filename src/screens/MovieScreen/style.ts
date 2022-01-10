import { StyleSheet } from 'react-native'
import theme from '~/styles'

const styles = StyleSheet.create({
  scrollview: {
    display: 'flex',
    backgroundColor: theme.colors.secondary,
  },
  container: {
    display: 'flex',
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
    paddingVertical: 15,
    justifyContent: 'space-around',
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
})

export default styles
