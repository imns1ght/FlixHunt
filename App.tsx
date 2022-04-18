import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
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
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            height: 55,
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: '700',
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Movie Browser' }} />
        <Stack.Screen
          name='Movie'
          component={MovieScreen}
          options={({ route }) => ({ title: route.params.movieName })}
        />
      </Stack.Navigator>
    </SafeAreaView>
  </NavigationContainer>
)

export default App
