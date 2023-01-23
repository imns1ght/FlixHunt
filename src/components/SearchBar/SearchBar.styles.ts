import { StyleSheet } from 'react-native'
import theme from '~/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black,
    elevation: 2,
    top: 50,
    position: 'absolute',
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchIcon: {
    marginRight: 5,
  },
  closeIcon: {
    marginLeft: 5,
    padding: 5,
  },
  textInput: {
    color: theme.colors.white,
    flex: 1,
  },
  placeholder: {
    color: theme.colors.darkGray,
  },
})

export default styles
