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
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    marginTop: 3,
    color: colors.white,
  },
})

export default styles
