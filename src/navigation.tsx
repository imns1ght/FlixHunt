import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack'
import type { StackScreenProps } from '@react-navigation/stack'
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { mediaType } from './models'

export type StackParamList = {
  BottomBar: { mediaType: mediaType }
  Media: { id: number; title?: string; mediaType: mediaType }
}

export type TabParamList = {
  Home: undefined
  Movies: undefined
  TV: undefined
  Info: undefined
}

type MovieScreenProps = StackScreenProps<StackParamList, 'Media'>
type HomeScreenProps = BottomTabScreenProps<TabParamList, 'Home'>
type MoviesScreenProps = BottomTabScreenProps<TabParamList, 'Movies'>
type TVScreenProps = BottomTabScreenProps<TabParamList, 'TV'>
type InfoScreenProps = BottomTabScreenProps<TabParamList, 'Info'>

/** Use to get the params from the route.
 * Example: const component = ({ navigation, route }: NavigationScreenProps['Media']) => {...} */
export type NavigationScreenProps = {
  ['Home']: HomeScreenProps
  ['Media']: MovieScreenProps
  ['Movies']: MoviesScreenProps
  ['TV']: TVScreenProps
  ['Info']: InfoScreenProps
}

/**  Use with useNavigation hook!
 * Example: useNavigation<NavigationsProps>() */
export type StackNavigationProps = StackNavigationProp<StackParamList>
export type TabNavigationProps = BottomTabNavigationProp<TabParamList>

const Stack = createStackNavigator<StackParamList>()
const Tab = createBottomTabNavigator<TabParamList>()

export { Stack, Tab }
