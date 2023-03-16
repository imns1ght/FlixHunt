import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack'
import type { StackScreenProps } from '@react-navigation/stack'
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { mediaType } from './models'

export type TabParamList = {
  Home: undefined
  Search: undefined
  Movies: undefined
  TV: undefined
  Info: undefined
}

export type StackParamList = {
  BottomBar?: { screen?: keyof TabParamList }
  Media: { id: number; title?: string; mediaType: mediaType }
  Search: { id: string }
}

type MovieScreenProps = StackScreenProps<StackParamList, 'Media'>
type HomeScreenProps = BottomTabScreenProps<TabParamList, 'Home'>
type SearchScreenProps = BottomTabScreenProps<TabParamList, 'Search'>
type MoviesScreenProps = BottomTabScreenProps<TabParamList, 'Movies'>
type TVScreenProps = BottomTabScreenProps<TabParamList, 'TV'>
type InfoScreenProps = BottomTabScreenProps<TabParamList, 'Info'>

/** Use to get the params from the route.
 * Example: const component = ({ navigation, route }: NavigationScreenProps['Media']) => {...} */
export type NavigationScreenProps = {
  ['Home']: HomeScreenProps
  ['Search']: SearchScreenProps
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
