import 'react-native-gesture-handler'
import React from 'react'
import TopBar from './src/components/TopBar/TopBar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import MovieScreen from './src/screens/MovieScreen/MovieScreen'
import theme from '~/styles'
import { SafeAreaView } from 'react-native'

const Stack = createStackNavigator()

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const App = () => (
  <NavigationContainer
    theme={{
      dark: true,
      colors: {
        primary: theme.colors.primary,
        background: theme.colors.secondary,
        card: theme.colors.primary,
        text: theme.colors.white,
        border: theme.colors.gray,
        notification: theme.colors.primary,
      },
    }}
  >
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.secondary }}>
      <TopBar />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Movie' component={MovieScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  </NavigationContainer>
)

export default App
