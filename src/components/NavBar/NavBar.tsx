import { TouchableOpacity } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { TabParamList } from '~/navigation'
import { colors } from '~/styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'
import styles from './NavBar.styles'

const NavBar = ({ route }: { route: RouteProp<TabParamList, keyof TabParamList> }) => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: ({ focused, size }: { focused: boolean; color: string; size: number }) => {
    let iconName = ''
    if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline'
    else if (route.name === 'Movies') iconName = focused ? 'film' : 'film-outline'
    else if (route.name === 'TV') iconName = focused ? 'tv' : 'tv-outline'
    else if (route.name === 'Info')
      iconName = focused ? 'information-circle' : 'information-circle-outline'
    // You can return any component that you like here!
    return <Icon name={iconName} size={size} color={colors.white} />
  },
  tabBarStyle: styles.tabBarStyle,
  tabBarButton: ({ children, onPress }: BottomTabBarButtonProps) => (
    <TouchableOpacity onPress={onPress} style={styles.tabBarButton}>
      {children}
    </TouchableOpacity>
  ),
})

export default NavBar
