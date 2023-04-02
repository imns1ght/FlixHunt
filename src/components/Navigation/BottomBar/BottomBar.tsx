import { TouchableOpacity } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { BottomTabParamList } from '~/navigation'
import { theme } from '~/styles'
import Ionicos from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'
import styles from './BottomBar.styles'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs/lib/typescript/src/types'

const BottomBar = ({
  route,
}: {
  route: RouteProp<BottomTabParamList, keyof BottomTabParamList>
}): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarLabelStyle: { color: theme.colors.text },
  tabBarIcon: ({ focused, size }: { focused: boolean; color: string; size: number }) => {
    let iconName = ''
    if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline'
    else if (route.name === 'Search') iconName = focused ? 'search' : 'search-outline'
    else if (route.name === 'Movies') iconName = focused ? 'film' : 'film-outline'
    else if (route.name === 'TV') iconName = focused ? 'tv' : 'tv-outline'
    else if (route.name === 'Favorites')
      return (
        <MaterialIcons
          name={(iconName = focused ? 'favorite' : 'favorite-outline')}
          size={size}
          color={theme.colors.icon}
        />
      )
    else if (route.name === 'Lists') {
      return (
        <MaterialCommunityIcons
          name={(iconName = focused ? 'view-list' : 'view-list-outline')}
          size={size}
          color={theme.colors.icon}
        />
      )
    } else if (route.name === 'Profile') {
      iconName = focused ? 'person-circle' : 'person-circle-outline'
    }

    return <Ionicos name={iconName} size={size} color={theme.colors.icon} />
  },
  tabBarStyle: styles.tabBarStyle,
  tabBarButton: ({ children, onPress }: BottomTabBarButtonProps) => (
    <TouchableOpacity onPress={onPress} style={styles.tabBarButton}>
      {children}
    </TouchableOpacity>
  ),
})

export default BottomBar
