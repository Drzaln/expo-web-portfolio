import { StatusBar } from "expo-status-bar"
import { MotiView } from "moti"
import React from "react"
import { Image, StyleSheet, View } from "react-native"
import Button from "./components/Button"
import IndonesiaBanner from "./components/IndonesiaBanner"
import TextCustom from "./components/TextCustom"
import { colors } from "./constant"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.flexHorizontal}>
        <IndonesiaBanner />
      </View>
      <View style={styles.centerFlex}>
        <View style={styles.header}>
          <MotiView
            delay={700}
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "timing", duration: 750 }}>
            <TextCustom weight='500Medium' style={styles.text48}>
              Hi, I am
            </TextCustom>
            <TextCustom weight='700Bold' style={styles.text96}>
              Doddy Rizal N
            </TextCustom>
          </MotiView>
          <MotiView
            delay={700}
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "timing", duration: 750 }}
            style={styles.imageContainer}>
            <Image source={require("./assets/me.webp")} style={styles.image} />
          </MotiView>
        </View>
        <MotiView
          from={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 450 }}
          delay={1300}
          style={styles.fieldContainer}>
          <TextCustom style={styles.text24}>React Native</TextCustom>
          <View style={styles.littleDot} />
          <TextCustom style={styles.text24}>Flutter</TextCustom>
        </MotiView>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonFlexRow}>
            <View style={styles.flex022} />
            <View style={styles.buttonWrapper}>
              <Button type='about' width={406} delay={3000} />
              <Button type='experience' width={664} delay={2500} />
              <Button type='myworks' width={938} delay={2000} />
            </View>
          </View>
        </View>
      </View>
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
  centerFlex: { flex: 0.9, paddingHorizontal: "15%", paddingVertical: 60 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text48: { fontSize: 48 },
  text96: { fontSize: 96 },
  imageContainer: {
    height: 170,
    width: 170,
    borderRadius: 170 / 2,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  image: { height: 170 },
  fieldContainer: { flexDirection: "row", alignItems: "center" },
  text24: { fontSize: 24 },
  littleDot: {
    height: 14,
    width: 14,
    borderRadius: 14 / 2,
    marginHorizontal: 16,
    backgroundColor: colors.white,
  },
  buttonContainer: {
    flex: 1,
  },
  buttonFlexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  flex022: { flex: 0.22 },
  buttonWrapper: {
    justifyContent: "space-around",
    flex: 0.78,
  },
})
