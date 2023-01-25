import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  container: {
    marginVertical: 14,
  },
  content: {
    marginHorizontal: 15,
  },
  contentWithoutMargin: {
    marginHorizontal: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginHorizontal: 15,
    marginBottom: 20,
  },
})

export default styles
