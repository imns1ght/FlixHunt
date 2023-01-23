import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Header } from '~/components'
import { HomeScreen, MovieScreen } from '~/screens'
import theme from '~/styles'
import Stack from '~/navigation'
import { SearchContextProvider } from '~/contexts/'

const App = () => {
  return (
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
      <SafeAreaView style={{ flex: 1 }}>
        <SearchContextProvider>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              header: props => <Header {...props} />,
            }}
          >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen
              name='Movie'
              component={MovieScreen}
              getId={({ params }) => `${params.movieId}`}
            />
          </Stack.Navigator>
        </SearchContextProvider>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
