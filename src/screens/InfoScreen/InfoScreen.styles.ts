import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: colors.white,
    fontSize: 16,
  },
})

export default styles
