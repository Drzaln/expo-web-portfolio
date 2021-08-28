import { MotiView } from "moti"
import React from "react"
import { StyleSheet, View } from "react-native"
import { colors } from "../constant"
import TextCustom from "./TextCustom"

const IndonesiaBanner = ({ rotated }) => {
  return (
    <View
      style={[
        styles.container,
        { transform: [{ rotate: rotated ? "180deg" : "0deg" }] },
      ]}>
      <TextCustom color={colors.grey} style={styles.indonesiaText}>
        INDONESIA
      </TextCustom>
      <MotiView
        from={{ translateY: 1000 }}
        animate={{ translateY: 100 }}
        transition={{ type: "timing", duration: 700 }}
        style={styles.line}
      />
    </View>
  )
}

export default IndonesiaBanner

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  indonesiaText: {
    fontSize: 18,
    transform: [{ rotate: "-90deg" }, { translateX: -50 }],
  },
  line: {
    height: "85%",
    width: 1,
    backgroundColor: colors.grey,
  },
})
