import { StyleSheet } from 'react-native'
import theme from '~/styles'

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: theme.colors.white,
  },
})

export default styles
