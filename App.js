import { StatusBar } from "expo-status-bar"
import React from "react"
import { Image, Pressable, StyleSheet, View } from "react-native"
import TextButton from "./components/TextButton"
import TextCustom from "./components/TextCustom"
import { colors } from "./constant"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={{ flex: 0.05 }}>
        <Indonesia />
      </View>
      <View
        style={{ flex: 0.9, paddingHorizontal: "15%", paddingVertical: 60 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <View>
            <TextCustom weight='500Medium' style={{ fontSize: 48 }}>
              Hi, I am
            </TextCustom>
            <TextCustom weight='700Bold' style={{ fontSize: 96 }}>
              Doddy Rizal N
            </TextCustom>
          </View>
          <View
            style={{
              height: 170,
              width: 170,
              borderRadius: 170 / 2,
              backgroundColor: colors.white,
              overflow: "hidden",
            }}>
            <Image
              source={require("./assets/me.png")}
              style={{ height: 170 }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextCustom style={{ fontSize: 24 }}>React Native</TextCustom>
          <View
            style={{
              height: 14,
              width: 14,
              borderRadius: 14 / 2,
              marginHorizontal: 16,
              backgroundColor: colors.white,
            }}
          />
          <TextCustom style={{ fontSize: 24 }}>Flutter</TextCustom>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
            }}>
            <View />
            <View style={{ justifyContent: "space-around" }}>
              <Button type='about' width={406} />
              <Button type='experience' width={664} />
              <Button type='myworks' width={938} />
            </View>
          </View>
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
    overflow: "hidden",
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

const Button = ({ type, width }) => {
  return (
    <View
      style={{
        justifyContent: "flex-end",
        height: 113,
      }}>
      <Pressable
        accessibilityRole='link'
        style={{
          backgroundColor: "white",
          width: width,
          height: 60,
        }}
      />
      <Pressable
        accessibilityRole='link'
        style={{
          position: "absolute",
          top: 0,
          transform: [{ translateX: 20 }],
        }}>
        <TextButton type={type} />
      </Pressable>
    </View>
  )
}
