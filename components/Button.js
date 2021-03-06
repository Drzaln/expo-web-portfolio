import { MotiView } from "moti"
import React from "react"
import { Pressable, StyleSheet, View } from "react-native"
import { colors } from "../constant"
import SwitchComponent from "./SwitchComponent"
import TextButton from "./TextButton"

const Button = ({ type, width, delay, onPress, right, renderInsideBar }) => {
  return (
    <SwitchComponent
      desktopComponent={
        <View style={styles.container}>
          <Pressable onPress={onPress} accessibilityRole='link'>
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
          <Pressable
            onPress={onPress}
            accessibilityRole='link'
            style={styles.textWrapper}>
            <MotiView
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              delay={delay + 600}>
              <TextButton type={type} />
            </MotiView>
          </Pressable>
        </View>
      }
      phoneComponent={
        <View style={styles.mobileContainer}>
          <Pressable onPress={onPress} accessibilityRole='link'>
            <MotiView
              from={{
                width: "0%",
              }}
              animate={{ width }}
              delay={delay}
              transition={{ type: "timing", duration: 700 }}
              style={styles.mobileBar}>
              {renderInsideBar}
            </MotiView>
          </Pressable>
          <Pressable
            onPress={onPress}
            accessibilityRole='link'
            style={[styles.mobileTextWrapper, { right }]}>
            <MotiView
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              delay={delay + 600}>
              <TextButton type={type} />
            </MotiView>
          </Pressable>
        </View>
      }
    />
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
  mobileContainer: {
    justifyContent: "flex-end",
    height: 47.6,
  },
  mobileBar: {
    backgroundColor: colors.white,
    justifyContent: "center",
    height: 27,
  },
  mobileTextWrapper: {
    position: "absolute",
    top: 0,
    transform: [{ translateX: 10 }],
  },
})
