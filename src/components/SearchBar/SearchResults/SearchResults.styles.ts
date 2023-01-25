import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  container: {
    top: 50,
    height: 350,
    position: 'absolute',
    backgroundColor: colors.black,
    width: '100%',
  },
  errorMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
})

export default styles
