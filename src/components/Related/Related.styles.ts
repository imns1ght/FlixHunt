import { Platform, StyleSheet } from 'react-native'
import theme from '~/styles'

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    borderRadius: 8,
  },
  errorMessage: {
    color: theme.colors.error,
    fontSize: 20,
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    zIndex: -90,
    borderRadius: 5,
  },
  cardText: {
    position: 'absolute',
    bottom: 15,
    left: 25,
    fontSize: 50,
    fontWeight: 'bold',
    elevation: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: theme.colors.secondary,
  },
  cardTextVotes: {
    color: theme.colors.secondary,
    fontWeight: 'bold',
    fontSize: 12,
  },
})

export default styles
