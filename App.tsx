import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SearchContextProvider } from '~/contexts/'
import { Header, NavBar } from '~/components'
import { HomeScreen, InfoScreen, MediaScreen, MoviesScreen, TVShowsScreen } from '~/screens'
import { Stack, Tab } from '~/navigation'
import { theme } from '~/styles'

const BottomBar = () => (
  <Tab.Navigator screenOptions={NavBar}>
    <Tab.Screen name='Home' component={HomeScreen} />
    <Tab.Screen name='Movies' component={MoviesScreen} />
    <Tab.Screen name='TV' component={TVShowsScreen} />
    <Tab.Screen name='Info' component={InfoScreen} />
  </Tab.Navigator>
)

const App = () => (
  <NavigationContainer theme={theme}>
    <SearchContextProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName='BottomBar'
          screenOptions={{ header: props => <Header {...props} /> }}
        >
          <Stack.Screen name='BottomBar' component={BottomBar} />
          <Stack.Screen
            name='Media'
            component={MediaScreen}
            getId={({ params }) => `${params.id}`}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </SearchContextProvider>
  </NavigationContainer>
)

export default App
