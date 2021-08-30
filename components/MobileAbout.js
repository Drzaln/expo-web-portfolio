import { useNavigation } from "@react-navigation/native"
import { MotiView } from "moti"
import React from "react"
import { StyleSheet, View } from "react-native"
import { colors } from "../constant"
import Button from "./Button"
import IconButton from "./IconButton"
import Icons from "./Icons"
import TextCustom from "./TextCustom"

const MobileAbout = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.phoneContainer}>
      <Button
        type='about'
        width={"55%"}
        delay={0}
        right={"50%"}
        renderInsideBar={
          <View style={styles.leftIcon}>
            <Icons name='left' size={30} />
          </View>
        }
        onPress={() => navigation.navigate("Home")}
      />
      <View style={styles.textWrapper}>
        <MotiView
          delay={900}
          from={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 450 }}>
          <TextCustom weight='700Bold' style={styles.headText}>
            Hi, I am Doddy
          </TextCustom>
        </MotiView>
        <MotiView
          delay={1500}
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 450 }}>
          <TextCustom style={styles.contentText}>
            Passionate mobile developer, mostly using React Native or Flutter.
          </TextCustom>
          <TextCustom style={styles.contentText}>
            I like to build beatiful and interactive User Interface such as
            micro interaction and animation.
          </TextCustom>
          <TextCustom style={styles.contentText}>
            Currently learning android development using Kotlin and Jetpack
            Compose.
          </TextCustom>
        </MotiView>
        <MotiView
          delay={1900}
          from={{ opacity: 0, translateX: 10 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ type: "timing", duration: 450 }}>
          <TextCustom
            weight='500Medium'
            color={colors.grey}
            style={styles.connectText}>
            Let's connect
          </TextCustom>
        </MotiView>
        <View style={styles.iconGroupWrapper}>
          <IconButton
            name='mail'
            color={colors.grey}
            size={49}
            delay={2500}
            onPress={() => window.open(`mailto:doddyrizaln@gmail.com`)}
          />
          <View style={styles.spacer} />
          <IconButton
            name='github'
            color={colors.grey}
            size={49}
            delay={2900}
            onPress={() => window.open("https://github.com/drzaln", "_blank")}
          />
          <View style={styles.spacer} />
          <IconButton
            name='twitter'
            color={colors.grey}
            size={49}
            delay={3300}
            onPress={() => window.open("https://twitter.com/drizaln", "_blank")}
          />
          <View style={styles.spacer} />
          <IconButton
            name='linkedin'
            color={colors.grey}
            size={49}
            delay={3700}
            onPress={() =>
              window.open("https://www.linkedin.com/in/drzaln/", "_blank")
            }
          />
        </View>
      </View>
    </View>
  )
}

export default MobileAbout

const styles = StyleSheet.create({
  phoneContainer: { paddingTop: 40, paddingBottom: 60 },
  leftIcon: { marginLeft: 20 },
  spacer: { width: "7%" },
  textWrapper: { marginTop: 50, paddingHorizontal: 25 },
  headText: { fontSize: 24, marginBottom: 10 },
  contentText: { fontSize: 18, marginTop: 20 },
  connectText: { fontSize: 24, marginTop: 50, textAlign: "right" },
  iconGroupWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 8,
  },
})
