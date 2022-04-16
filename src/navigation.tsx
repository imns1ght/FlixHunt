import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack'
import type { StackScreenProps } from '@react-navigation/stack'

export type StackParamList = {
  Home: undefined
  Movie: { movieId: number; movieName?: string } | undefined
}

type HomeScreenProps = StackScreenProps<StackParamList, 'Home'>
type MovieScreenProps = StackScreenProps<StackParamList, 'Movie'>

/** Use to get the params from the route.
 * Example: const component = ({ navigation, route }: NavigationScreenProps['Movie']) => {...} */
export type NavigationScreenProps = {
  ['Home']: HomeScreenProps
  ['Movie']: MovieScreenProps
}

/**  Use with useNavigation hook!
 * Example: useNavigation<NavigationsProps>() */
export type NavigationProps = StackNavigationProp<StackParamList>

const Stack = createStackNavigator<StackParamList>()

export default Stack
