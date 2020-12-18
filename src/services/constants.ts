
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('screen')
const tabBarHeight = 54

export const CONSTANTS = {
  api_base_url: 'https://api.themoviedb.org/3',
  api_key: `3977028d418452ab5ad05c8bb732a7e0`,
  width,
  height: height - tabBarHeight * 2
}