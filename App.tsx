import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { ToastProvider } from 'react-native-toast-notifications'
import { useTranslation } from 'react-i18next';

import { BottomBar } from '~/components'
import {
  AuthScreen,
  FavoritesScreen,
  HomeScreen,
  InfoScreen,
  MediaScreen,
  ProfileScreen,
  SearchScreen,
} from '~/screens'
import { BottomTab, Stack, linkingConfig } from '~/navigation'
import { theme } from '~/styles'

const BottomTabBar = () => {
  const { t } = useTranslation();

  return (<BottomTab.Navigator screenOptions={BottomBar}>
    <BottomTab.Screen
      name='Home'
      component={HomeScreen}
      options={{
        tabBarLabel: t('bottomBar.home'),
      }}
    />
    <BottomTab.Screen
      name='Search'
      component={SearchScreen}
      options={{
        tabBarLabel: t('bottomBar.search'),
      }}
    />
    <BottomTab.Screen
      name='Favorites'
      component={FavoritesScreen}
      options={{
        tabBarLabel: t('bottomBar.favorites'),
      }}
    />
    <BottomTab.Screen
      name='Profile'
      component={ProfileScreen}
      options={{
        tabBarLabel: t('bottomBar.profile'),
      }}
    />
  </BottomTab.Navigator>)
}

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
          <Stack.Screen name='Auth' component={AuthScreen} />
          <Stack.Screen name='Info' component={InfoScreen} />
        </Stack.Navigator>
      </View>
    </ToastProvider>
  </NavigationContainer>
)

const wrapperStyle = { flexGrow: 1, backgroundColor: theme.colors.background }

export default App
