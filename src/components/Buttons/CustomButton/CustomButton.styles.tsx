import { StyleSheet } from 'react-native'
import { theme } from '~/styles'
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
    elevation: 1,
  },
  containerDisabled: {
    backgroundColor: theme.colors.primary + '80',
  },
  containerRounded: {
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  containerTransparent: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    elevation: 0,
  },
  icon: {
    marginTop: 2,
    color: theme.colors.icon,
  },
})

export default styles
