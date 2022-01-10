import { StyleSheet } from 'react-native'
import theme from '~/styles'

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    elevation: 2,
  },
  image: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 5,
    marginRight: 5,
  },
  itemTextContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  itemTitle: {
    fontSize: 24,
    color: theme.colors.white,
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    color: theme.colors.white,
    marginBottom: 10,
  },
  tags: {
    fontSize: 16,
    color: theme.colors.white,
  },
  errorMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
})

export default styles
