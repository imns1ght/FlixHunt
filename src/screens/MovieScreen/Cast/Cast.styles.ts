import { StyleSheet } from 'react-native'
import theme from '~/styles'

const styles = StyleSheet.create({
  scrollContainer: {
    marginBottom: 20,
  },
  card: {
    marginRight: 8,
    height: 240,
    width: 200,
    borderRadius: 5,
    justifyContent: 'flex-end',
  },
  infoContainer: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  name: {
    fontSize: 20,
    color: theme.colors.white,
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    color: theme.colors.white,
  },
})

export default styles
