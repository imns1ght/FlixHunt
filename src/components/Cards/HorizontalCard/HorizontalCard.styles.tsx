import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 1,
    marginVertical: 5,
    paddingHorizontal: 2,
    backgroundColor: colors.tertiary,
    borderRadius: 5,
  },
  textContainer: {
    flexGrow: 1,
    rowGap: 5,
  },
  image: {
    height: 140,
    aspectRatio: '2/3',
    borderRadius: 2,
    marginRight: 5,
  },
  rightContainer: {
    flex: 1,
    rowGap: 5,
    marginLeft: 5,
    marginRight: 10,
    paddingTop: 5,
  },
  horizontalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  release: {
    paddingTop: 5,
  },
  details: {
    rowGap: 5,
  },
})

export default styles
