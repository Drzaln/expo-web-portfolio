import "@expo/match-media"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TextCustom from "./components/TextCustom"
import About from "./screens/About"
import Home from "./screens/Home"

const Stack = createNativeStackNavigator()

const linking = {
  prefixes: ["https://doddy.vercel.app", "doddy://"],
  config: {
    screens: {
      Home: "/",
      About: "/about",
    },
  },
}

export default function App() {
  return (
    <NavigationContainer
      linking={linking}
      fallback={<TextCustom>Loading...</TextCustom>}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='About' component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
