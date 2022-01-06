import 'react-native-gesture-handler'
import React from 'react'
import TopBar from './src/components/TopBar/TopBar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import MovieScreen from './src/screens/MovieScreen/MovieScreen'

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <TopBar />
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Movie' component={MovieScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
