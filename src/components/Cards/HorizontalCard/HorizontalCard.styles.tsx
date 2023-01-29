import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 2,
    marginVertical: 5,
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
  image: {
    height: 180,
    aspectRatio: '2/3',
    borderRadius: 2,
    marginRight: 5,
  },
  textContainer: {
    flex: 1,
    rowGap: 10,
    marginLeft: 5,
    marginRight: 10,
  },
  details: {
    rowGap: 5,
  },
})

export default styles
