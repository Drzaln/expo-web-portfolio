import React from "react"
import { StyleSheet, Text } from "react-native"
import { colors } from "../constant/index"
import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins"

const TextCustom = ({
  children,
  weight = "400Regular",
  style,
  color = colors.white,
}) => {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  })
  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  } else {
    return (
      <Text style={[{ fontFamily: `Poppins_${weight}`, color }, style]}>
        {children}
      </Text>
    )
  }
}

export default TextCustom

const styles = StyleSheet.create({})
