import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    height: 230,
    aspectRatio: '2/3',
    marginRight: 10,
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
})

export default styles
