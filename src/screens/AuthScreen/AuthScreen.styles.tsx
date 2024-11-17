import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  imageBackground: {
    flexGrow: 1,
    alignItems: 'center',
  },
  titleContainer: {},
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexGrow: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  guestButton: {
    paddingTop: 10,
    alignSelf: 'center',
  },
  title: {
    flex: 0,
    alignSelf: 'flex-start',
    paddingBottom: 10,
    fontSize: 38,
  },
  subtitle: {
    alignSelf: 'flex-start',
  },
  description: {
    textAlign: 'center',
    paddingBottom: 15,
  },
  disclaimer: {
    textAlign: 'center',
    fontSize: 11,
    paddingBottom: 10,
  },
})

export default styles
