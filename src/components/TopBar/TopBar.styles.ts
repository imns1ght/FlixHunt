import { StyleSheet } from 'react-native'
import theme from '~/styles'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 62,
    flexDirection: 'row', // row
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center', // center, space-around
    paddingLeft: 30,
    paddingRight: 30,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginRight: 15,
    color: theme.colors.white,
  },
  textGeneric: {
    fontSize: 18,
    color: theme.colors.secondary,
  },
})

export default styles
