import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { BottomTabParamList } from '~/navigation'
import { theme } from '~/styles'
import Ionicos from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

const BottomBar = ({
  route,
}: {
  route: RouteProp<BottomTabParamList, keyof BottomTabParamList>
}): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarShowLabel: true,
  tabBarLabelStyle: { color: theme.colors.text },
  tabBarIcon: ({ focused, size }: { focused: boolean; color: string; size: number }) => {
    let iconName = ''
    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline'
    } else if (route.name === 'Search') {
      iconName = focused ? 'search' : 'search-outline'
    } else if (route.name === 'Favorites') {
      return (
        <MaterialIcons
          name={focused ? 'favorite' : 'favorite-outline'}
          size={size}
          color={theme.colors.icon}
        />
      )
    } else if (route.name === 'Lists') {
      return (
        <MaterialCommunityIcons
          name={focused ? 'view-list' : 'view-list-outline'}
          size={size}
          color={theme.colors.icon}
        />
      )
    } else if (route.name === 'Profile') {
      iconName = focused ? 'person-circle' : 'person-circle-outline'
    }

    return <Ionicos name={iconName} size={size} color={theme.colors.icon} />
  },
})

export default BottomBar
