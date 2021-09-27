import { StyleSheet } from 'react-native'
import { COLORS } from '../../../style'

const styles = StyleSheet.create({
  card: {
    height: 370,
    width: 250,
    padding: 5,
    margin: 10,
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFF',
    height: 335,
    resizeMode: 'stretch',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8.3,
    overflow: 'visible',
  },
  cardText: {
    position: 'absolute',
    bottom: 15,
    left: 25,
    fontSize: 50,
    fontWeight: 'bold',
    elevation: 1,
    color: COLORS.secondary,
  },
  cardSubBar: {
    backgroundColor: 'rgb(12, 27, 41)',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: 25,
    width: 250,
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'space-between',
    left: 0,
    bottom: 0,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  cardSubBarText: {
    color: COLORS.secondary,
    fontWeight: 'bold',
    fontSize: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
})

export default styles
