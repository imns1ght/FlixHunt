import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
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
    backgroundColor: theme.colors.primary + '70',
  },
  icon: {
    marginTop: 2,
    color: theme.colors.icon,
  },
})

export default styles
