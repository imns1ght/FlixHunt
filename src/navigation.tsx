import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack'
import type { StackScreenProps } from '@react-navigation/stack'
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { mediaType } from './models'
import { DEFAULT_REGION, LANGUAGE } from './services'
import { colors } from './styles'

export type TabParamList = {
  Home: undefined
  Search: undefined
  Movies: undefined
  TV: undefined
  Profile: undefined
}

export type StackParamList = {
  BottomBar?: { screen?: keyof TabParamList }
  Media: { id: number; title?: string; mediaType: mediaType }
  Search: { id: string }
  Auth: undefined
  Info: undefined
}

type MovieScreenProps = StackScreenProps<StackParamList, 'Media'>
type HomeScreenProps = BottomTabScreenProps<TabParamList, 'Home'>
type SearchScreenProps = BottomTabScreenProps<TabParamList, 'Search'>
type MoviesScreenProps = BottomTabScreenProps<TabParamList, 'Movies'>
type TVScreenProps = BottomTabScreenProps<TabParamList, 'TV'>
type ProfileScreenProps = BottomTabScreenProps<TabParamList, 'Profile'>
type InfoScreenProps = BottomTabScreenProps<StackParamList, 'Info'>
type AuthScreenProps = BottomTabScreenProps<StackParamList, 'Auth'>

/** Use to get the params from the route.
 * Example: const component = ({ navigation, route }: NavigationScreenProps['Media']) => {...} */
export type NavigationScreenProps = {
  ['Home']: HomeScreenProps
  ['Search']: SearchScreenProps
  ['Media']: MovieScreenProps
  ['Movies']: MoviesScreenProps
  ['TV']: TVScreenProps
  ['Auth']: AuthScreenProps
  ['Info']: InfoScreenProps
  ['Profile']: ProfileScreenProps
}

/**  Use with useNavigation hook!
 * Example: useNavigation<NavigationsProps>() */
export type StackNavigationProps = StackNavigationProp<StackParamList>
export type TabNavigationProps = BottomTabNavigationProp<TabParamList>

const Stack = createStackNavigator<StackParamList>()
const Tab = createBottomTabNavigator<TabParamList>()

const linkingConfig = {
  prefixes: ['flixhunt://'],
  config: {
    screens: {
      Auth: 'auth',
    },
  },
}

const tmdbDefaultHeader = () => ({
  headers: {
    Cookie: `tmdb.prefs={"locale":${LANGUAGE},"country_code":${DEFAULT_REGION}}`,
  },
})

const inAppBrowserDefaultOptions = {
  ...tmdbDefaultHeader(),
  hasBackButton: true,
  includeReferrer: true,
  toolbarColor: colors.secondary,
  forceCloseOnRedirection: false,
  showInRecents: true,
}

export { Stack, Tab, linkingConfig, inAppBrowserDefaultOptions }
