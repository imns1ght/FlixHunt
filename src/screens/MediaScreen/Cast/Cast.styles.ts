import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  card: {
    marginRight: 8,
    height: 240,
    width: 200,
    borderRadius: 5,
    justifyContent: 'flex-end',
  },
  infoContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  name: {
    fontSize: 20,
    color: colors.white,
    marginBottom: 3,
  },
  description: {
    fontSize: 16,
    color: colors.white,
  },
})

export default styles
