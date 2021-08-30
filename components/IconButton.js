import { MotiView } from "moti"
import React from "react"
import { Pressable } from "react-native"
import Icons from "./Icons"

const IconButton = ({ name, onPress, size, color, delay }) => {
  if (delay) {
    return (
      <Pressable onPress={onPress}>
        <MotiView
          delay={delay}
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 450 }}>
          <Icons name={name} size={size} color={color} />
        </MotiView>
      </Pressable>
    )
  }
  return (
    <Pressable onPress={onPress}>
      <Icons name={name} size={size} color={color} />
    </Pressable>
  )
}

export default IconButton
