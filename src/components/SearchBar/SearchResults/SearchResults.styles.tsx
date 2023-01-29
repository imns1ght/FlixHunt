import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  container: {
    top: 50,
    maxHeight: 350,
    position: 'absolute',
    backgroundColor: colors.black,
    width: '100%',
    paddingVertical: 10,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
})

export default styles
