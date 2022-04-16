import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { TopBar } from '~/components/'
import { HomeScreen, MovieScreen } from '~/screens'
import theme from '~/styles'
import Stack from '~/navigation'

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
        initialRouteName='Home'
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
