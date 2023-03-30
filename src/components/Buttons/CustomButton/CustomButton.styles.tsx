import { StyleSheet } from 'react-native'
import { theme } from '~/styles'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    elevation: 1,
    maxWidth: 350,
  },
  containerDisabled: {
    backgroundColor: theme.colors.primary + '80',
  },
  containerRounded: {
    borderRadius: 25,
    paddingHorizontal: 15,
  },
  icon: {
    marginTop: 2,
    color: theme.colors.icon,
  },
})

export default styles
