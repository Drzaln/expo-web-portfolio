import "@expo/match-media"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View } from "react-native"
import DesktopCenterFlex from "./components/DesktopCenterFlex"
import IndonesiaBanner from "./components/IndonesiaBanner"
import MobileCenterFlex from "./components/MobileCenterFlex"
import SwitchComponent from "./components/SwitchComponent"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.flexHorizontal}>
        <IndonesiaBanner />
      </View>
      <SwitchComponent
        desktopComponent={<DesktopCenterFlex />}
        phoneComponent={<MobileCenterFlex />}
      />
      <View style={styles.flexHorizontal}>
        <IndonesiaBanner rotated={true} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529",
    flexDirection: "row",
    overflow: "hidden",
  },
  flexHorizontal: { flex: 0.05 },
})
