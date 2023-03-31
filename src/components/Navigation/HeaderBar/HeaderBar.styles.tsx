import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  customButtonsContainer: {
    flexDirection: 'row',
    marginRight: 5,
    columnGap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.text,
  },
})

export default styles
