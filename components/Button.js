import { MotiView } from "moti"
import React from "react"
import { Pressable, StyleSheet, View } from "react-native"
import { colors } from "../constant"
import TextButton from "./TextButton"

const Button = ({ type, width, delay }) => {
  return (
    <View style={styles.container}>
      <Pressable accessibilityRole='link'>
        <MotiView
          from={{
            width: 0,
          }}
          animate={{ width }}
          delay={delay}
          transition={{ type: "timing", duration: 700 }}
          style={styles.bar}
        />
      </Pressable>
      <Pressable accessibilityRole='link' style={styles.textWrapper}>
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          delay={delay + 600}>
          <TextButton type={type} />
        </MotiView>
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    height: 113,
  },
  bar: {
    backgroundColor: colors.white,
    height: 60,
  },
  textWrapper: {
    position: "absolute",
    top: 0,
    transform: [{ translateX: 20 }],
  },
})
