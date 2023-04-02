import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const styles = StyleSheet.create({
  title: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '500',
  },
  paragraph: {
    color: theme.colors.text,
    fontSize: 16,
  },
  link: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  button: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  bold: {
    fontWeight: '700',
  },
  centered: {
    textAlign: 'center',
  },
})

export default styles
