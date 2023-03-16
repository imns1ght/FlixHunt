import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    elevation: 1,
    flexDirection: 'row',
    columnGap: 10,
  },
  containerDisabled: {
    backgroundColor: colors.primary + '80',
  },
  icon: {
    marginTop: 2,
    color: colors.white,
  },
})

export default styles
