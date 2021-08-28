import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View } from "react-native"
import TextCustom from "./components/TextCustom"
import { colors } from "./constant"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={{ flex: 0.05 }}>
        <Indonesia />
      </View>
      <View style={{ flex: 0.9, paddingHorizontal: 20, paddingVertical: 60 }}>
        <TextCustom weight='500Medium' style={{ fontSize: 48 }}>
          Hi, I am
        </TextCustom>
        <TextCustom weight='700Bold' style={{ fontSize: 96 }}>
          Doddy Rizal N
        </TextCustom>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextCustom style={{ fontSize: 24 }}>React Native</TextCustom>
          <View
            style={{
              height:14,
              width:14,
              borderRadius:14 / 2,
              marginHorizontal: 16,
              backgroundColor: colors.white,
            }}
          />
          <TextCustom style={{ fontSize: 24 }}>Flutter</TextCustom>
        </View>
      </View>
      <View style={{ flex: 0.05 }}>
        <Indonesia rotated={true} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529",
    flexDirection: "row",
  },
})

const Indonesia = ({ rotated }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        transform: [{ rotate: rotated ? "180deg" : "0deg" }],
      }}>
      <TextCustom
        color={colors.grey}
        style={{
          fontSize: 18,
          transform: [{ rotate: "-90deg" }, { translateX: -50 }],
        }}>
        INDONESIA
      </TextCustom>
      <View
        style={{
          height: "85%",
          width: 1,
          backgroundColor: colors.grey,
          transform: [{ translateY: 100 }],
        }}
      />
    </View>
  )
}
