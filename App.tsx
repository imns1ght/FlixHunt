import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { createContext } from "react";
import TopBar from "./src/components/TopBar/TopBar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import Movie from "./src/screens/Movie/Movie";
import { COLORS } from "./style";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <TopBar />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Movie" component={Movie} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
