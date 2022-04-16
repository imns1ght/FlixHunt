import { StyleSheet } from 'react-native'
import theme from '~/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
  },
  searchInput: {
    color: theme.colors.white,
    backgroundColor: theme.colors.black,
    padding: 20,
  },
})

export default styles
