import { MotiView } from "moti"
import React from "react"
import { StyleSheet, View } from "react-native"
import { colors } from "../constant"
import Button from "./Button"
import TextCustom from "./TextCustom"

const MobileCenterFlex = () => {
  return (
    <View style={styles.centerFlex}>
      <MotiView
        delay={700}
        from={{ opacity: 0, translateX: -10 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ type: "timing", duration: 750 }}>
        <TextCustom weight='700Bold' style={styles.text64}>
          Doddy Rizal N
        </TextCustom>
      </MotiView>
      <MotiView
        from={{ opacity: 0, translateX: 10 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ type: "timing", duration: 450 }}
        delay={1300}
        style={styles.field}>
        <TextCustom style={styles.text18}>React Native</TextCustom>
        <View style={styles.littleDot} />
        <TextCustom style={styles.text18}>Flutter</TextCustom>
      </MotiView>
      <View style={styles.buttonContainer}>
        <Button type='about' width={"85%"} delay={3000} />
        <Button type='experience' width={"95%"} delay={2500} />
        <Button type='myworks' width={"100%"} delay={2000} />
      </View>
    </View>
  )
}

export default MobileCenterFlex

const styles = StyleSheet.create({
  centerFlex: {
    flex: 0.9,
    paddingHorizontal: "5%",
    paddingBottom: 60,
    paddingTop: 40,
  },
  text64: { fontSize: 64 },
  text18: { fontSize: 18 },
  littleDot: {
    height: 8,
    width: 8,
    borderRadius: 8 / 2,
    backgroundColor: colors.white,
    marginVertical: 8,
  },
  field: { alignItems: "flex-end" },
  buttonContainer: { flex: 1, justifyContent: "space-evenly" },
})
