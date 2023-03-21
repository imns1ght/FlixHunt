import { StyleSheet } from 'react-native'
import { colors, theme } from '~/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
  },
  searchIcon: {
    marginRight: 5,
  },
  closeIcon: {
    marginLeft: 5,
    padding: 5,
  },
  textInput: {
    color: theme.colors.text,
    flex: 1,
  },
  placeholder: {
    color: colors.gray,
  },
})

export default styles
