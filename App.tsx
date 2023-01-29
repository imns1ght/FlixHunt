import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SearchContextProvider } from '~/contexts/'
import { BottomBar, HeaderBar } from '~/components'
import { HomeScreen, InfoScreen, MediaScreen, MoviesScreen, TVShowsScreen } from '~/screens'
import { Stack, Tab } from '~/navigation'
import { theme } from '~/styles'
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types'

const animationConfig: TransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

const TabBar = () => (
  <Tab.Navigator screenOptions={BottomBar}>
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
          screenOptions={{ header: props => <HeaderBar {...props} /> }}
        >
          <Stack.Screen name='BottomBar' component={TabBar} />
          <Stack.Screen
            name='Media'
            component={MediaScreen}
            getId={({ params }) => `${params.id}`}
            options={{
              transitionSpec: {
                open: animationConfig,
                close: animationConfig,
              },
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </SearchContextProvider>
  </NavigationContainer>
)

export default App
