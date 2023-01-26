import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  card: {
    width: 200,
    marginRight: 10,
    height: 305,
    justifyContent: 'flex-end',
    borderRadius: 5,
  },
  disabledCard: {
    opacity: 0.5,
  },

  infoContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 20,
    color: colors.white,
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 16,
    color: colors.white,
  },
})

export default styles
