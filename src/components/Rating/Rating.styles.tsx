import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 3,
    alignItems: 'center',
  },
  voteAverageMax: {
    fontSize: 12,
  },
  icon: {
    color: colors.yellow,
  },
  voteCount: {
    marginLeft: 4,
    fontSize: 14,
  },
})

export default styles
