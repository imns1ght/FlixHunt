import { StyleSheet } from 'react-native'
import { COLORS } from '../../../style'
import { CONSTANTS } from '../../services/constants'

const MARGIN_H_DEFAULT = 15
const MARGIN_V_DEFAULT = 15
const MAX_WIDTH = CONSTANTS.width < 1200 ? CONSTANTS.width : 1200

const styles = StyleSheet.create({
  scrollview: {
    display: 'flex',
    alignContent: 'center',
    alignSelf: 'center',
    width: MAX_WIDTH,
    padding: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: MAX_WIDTH,
  },
  image: {
    aspectRatio: 1,
    height: CONSTANTS.height / 2,
    width: CONSTANTS.width,
    maxWidth: MAX_WIDTH,
    borderRadius: 8,
    resizeMode: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    overflow: 'visible',
  },
  text: {
    color: 'black',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: MARGIN_H_DEFAULT,
    marginVertical: MARGIN_V_DEFAULT,
  },
  subtitle: {
    fontSize: 24,
    color: 'black',
    marginHorizontal: MARGIN_H_DEFAULT + 5,
    marginBottom: MARGIN_V_DEFAULT,
  },
  tags: {
    fontSize: 14,
    color: 'black',
    marginLeft: MARGIN_H_DEFAULT + 10,
    marginVertical: 2,
  },
  overview: {
    fontSize: 18,
    color: 'black',
    marginHorizontal: MARGIN_H_DEFAULT + 10,
    marginBottom: MARGIN_V_DEFAULT,
  },
})

export default styles
