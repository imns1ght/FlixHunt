import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { BottomBar } from '~/components'
import {
  AuthScreen,
  HomeScreen,
  InfoScreen,
  MediaScreen,
  MoviesScreen,
  SearchScreen,
  TVShowsScreen,
} from '~/screens'
import { Stack, Tab, linkingConfig } from '~/navigation'
import { theme } from '~/styles'
import { translate } from '~/locales'

const TabBar = () => (
  <Tab.Navigator screenOptions={BottomBar}>
    <Tab.Screen
      name='Home'
      component={HomeScreen}
      options={{
        tabBarLabel: translate('bottomBar.home'),
      }}
    />
    <Tab.Screen
      name='Search'
      component={SearchScreen}
      options={{
        tabBarLabel: translate('bottomBar.search'),
      }}
    />
    <Tab.Screen
      name='Movies'
      component={MoviesScreen}
      options={{
        tabBarLabel: translate('bottomBar.movies'),
      }}
    />
    <Tab.Screen
      name='TV'
      component={TVShowsScreen}
      options={{
        tabBarLabel: translate('bottomBar.tv'),
      }}
    />
    <Tab.Screen
      name='Info'
      component={InfoScreen}
      options={{
        tabBarLabel: translate('bottomBar.info'),
      }}
    />
  </Tab.Navigator>
)

const App = () => (
  <NavigationContainer linking={linkingConfig} theme={theme}>
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName='Authenticate' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='BottomBar' component={TabBar} />
        <Stack.Screen name='Media' component={MediaScreen} getId={({ params }) => `${params.id}`} />
        <Stack.Screen
          name='Search'
          component={SearchScreen}
          getId={({ params }) => `${params.id}`}
        />
        <Stack.Screen name='Authenticate' component={AuthScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  </NavigationContainer>
)

export default App
