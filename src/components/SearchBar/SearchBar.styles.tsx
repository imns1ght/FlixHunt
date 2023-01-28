import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
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
    color: colors.white,
    flex: 1,
  },
  placeholder: {
    color: colors.gray,
  },
})

export default styles
