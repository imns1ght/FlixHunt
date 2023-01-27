import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 10,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 10,
  },
  link: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
})

export default styles
