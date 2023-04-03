import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { mediaType } from './models'
import { DEFAULT_REGION, LANGUAGE } from './services'
import { colors } from './styles'

export type BottomTabParamList = {
  Home: undefined
  Search: undefined
  Profile: undefined
  Favorites: undefined
  Lists: undefined
}

export type StackParamList = {
  BottomBar?: { screen?: keyof BottomTabParamList }
  Media: { id: number; title?: string; mediaType: mediaType }
  Search: { id: string }
  Lists: { id: string }
  Favorites: { id: string; tabFocused?: mediaType }
  Auth: undefined
  Info: undefined
}

type MovieScreenProps = NativeStackScreenProps<StackParamList, 'Media'>
type HomeScreenProps = BottomTabScreenProps<BottomTabParamList, 'Home'>
type SearchScreenProps = BottomTabScreenProps<BottomTabParamList, 'Search'>
type FavoritesScreenProps = BottomTabScreenProps<BottomTabParamList | StackParamList, 'Favorites'>
type ListsScreenProps = BottomTabScreenProps<BottomTabParamList, 'Lists'>
type ProfileScreenProps = BottomTabScreenProps<BottomTabParamList, 'Profile'>
type InfoScreenProps = BottomTabScreenProps<StackParamList, 'Info'>
type AuthScreenProps = BottomTabScreenProps<StackParamList, 'Auth'>

/** Use to get the params from the route.
 * Example: const component = ({ navigation, route }: NavigationScreenProps['Media']) => {...} */
export type NavigationScreenProps = {
  ['Home']: HomeScreenProps
  ['Search']: SearchScreenProps
  ['Favorites']: FavoritesScreenProps
  ['Lists']: ListsScreenProps
  ['Media']: MovieScreenProps
  ['Auth']: AuthScreenProps
  ['Info']: InfoScreenProps
  ['Profile']: ProfileScreenProps
}

/**  Use with useNavigation hook!
 * Example: useNavigation<NavigationsProps>() */
export type StackNavigationProps = NativeStackNavigationProp<StackParamList>
export type TabNavigationProps = BottomTabNavigationProp<BottomTabParamList>

const Stack = createNativeStackNavigator<StackParamList>()
const BottomTab = createBottomTabNavigator<BottomTabParamList>()

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

export { Stack, BottomTab, linkingConfig, inAppBrowserDefaultOptions }
