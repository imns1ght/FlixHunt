import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: colors.black + '90',
  },
  backTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    columnGap: 10,
    paddingRight: 10,
  },
  customButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
})

export default styles
