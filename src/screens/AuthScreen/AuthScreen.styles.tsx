import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  imageBackground: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
  },
  buttonContainer: {
    flexGrow: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  guestButton: {
    paddingVertical: 10,
    alignSelf: 'center',
  },
  title: {
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
    paddingVertical: 10,
  },
})

export default styles
