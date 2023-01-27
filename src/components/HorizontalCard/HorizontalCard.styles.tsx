import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.darkGray + '05',
    borderColor: colors.black + '10',
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
  image: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 2,
    marginRight: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 5,
    marginRight: 10,
  },
  tagsContainer: {
    rowGap: 5,
  },
  title: {
    fontSize: 24,
    color: colors.white,
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    color: colors.white,
  },
  tags: {
    fontSize: 16,
    color: colors.white,
  },
})

export default styles
