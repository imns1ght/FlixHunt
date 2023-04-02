import 'react-native-gesture-handler'
import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { ToastProvider } from 'react-native-toast-notifications'

import { BottomBar } from '~/components'
import {
  AuthScreen,
  FavoritesScreen,
  HomeScreen,
  InfoScreen,
  MediaScreen,
  // ListsScreen,
  // MoviesScreen,
  // TVShowsScreen,
  ProfileScreen,
  SearchScreen,
} from '~/screens'
import { BottomTab, Stack, linkingConfig } from '~/navigation'
import { theme } from '~/styles'
import { translate } from '~/locales'

const BottomTabBar = () => (
  <BottomTab.Navigator screenOptions={BottomBar}>
    <BottomTab.Screen
      name='Home'
      component={HomeScreen}
      options={{
        tabBarLabel: translate('bottomBar.home'),
      }}
    />
    <BottomTab.Screen
      name='Search'
      component={SearchScreen}
      options={{
        tabBarLabel: translate('bottomBar.search'),
      }}
    />
    {/* <BottomTab.Screen
      name='Movies'
      component={MoviesScreen}
      options={{
        tabBarLabel: translate('bottomBar.movies'),
      }}
    />
    <BottomTab.Screen
      name='TV'
      component={TVShowsScreen}
      options={{
        tabBarLabel: translate('bottomBar.tv'),
      }}
    /> */}
    <BottomTab.Screen
      name='Favorites'
      component={FavoritesScreen}
      options={{
        tabBarLabel: translate('bottomBar.favorites'),
      }}
    />
    {/* <BottomTab.Screen
      name='Lists'
      component={ListsScreen}
      options={{
        tabBarLabel: translate('bottomBar.lists'),
      }}
    /> */}
    <BottomTab.Screen
      name='Profile'
      component={ProfileScreen}
      options={{
        tabBarLabel: translate('bottomBar.profile'),
      }}
    />
  </BottomTab.Navigator>
)

const App = () => (
  <NavigationContainer linking={linkingConfig} theme={theme}>
    <ToastProvider swipeEnabled={true} normalColor={theme.colors.primary}>
      <View style={wrapperStyle}>
        <Stack.Navigator initialRouteName='Auth' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='BottomBar' component={BottomTabBar} />
          <Stack.Screen
            name='Media'
            component={MediaScreen}
            getId={({ params }) => `${params.id}`}
          />
          <Stack.Screen
            name='Search'
            component={SearchScreen}
            getId={({ params }) => `${params.id}`}
          />
          <Stack.Screen
            name='Favorites'
            component={FavoritesScreen}
            getId={({ params }) => `${params.id}`}
          />
          {/* <Stack.Screen
            name='Lists'
            component={ListsScreen}
            getId={({ params }) => `${params.id}`}
          /> */}
          <Stack.Screen name='Auth' component={AuthScreen} />
          <Stack.Screen name='Info' component={InfoScreen} />
        </Stack.Navigator>
      </View>
    </ToastProvider>
  </NavigationContainer>
)

const wrapperStyle = { flexGrow: 1, backgroundColor: theme.colors.background }

export default App
