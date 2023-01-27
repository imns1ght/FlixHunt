import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -2,
  },
  description: {
    color: colors.white,
    fontSize: 16,
    paddingHorizontal: 5,
  },
})

export default styles
