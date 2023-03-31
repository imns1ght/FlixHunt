import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 15,
    marginBottom: 15,
  },
  actionContainer: {
    flexGrow: 1,
  },
  profilePicture: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  actionButton: {
    marginTop: 15,
    maxWidth: 350,
  },
})

export default styles
