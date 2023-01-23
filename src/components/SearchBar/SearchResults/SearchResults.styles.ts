import { StyleSheet } from 'react-native'
import theme from '~/styles'

const styles = StyleSheet.create({
  container: {
    top: 50,
    height: 350,
    position: 'absolute',
    backgroundColor: theme.colors.black,
    width: '100%',
  },
  errorMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
})

export default styles
