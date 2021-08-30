import { MotiView } from "moti"
import React from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import Button from "../components/Button"
import IconButton from "../components/IconButton"
import IndonesiaBanner from "../components/IndonesiaBanner"
import MobileAbout from "../components/MobileAbout"
import SwitchComponent from "../components/SwitchComponent"
import TextCustom from "../components/TextCustom"
import { colors } from "../constant"

const About = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <SwitchComponent
        desktopComponent={
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={styles.bannerFlex}>
              <IndonesiaBanner />
            </View>
            <View style={{ flex: 0.3, overflow: "hidden" }}>
              <Button
                type='home'
                width={450}
                delay={700}
                onPress={() => navigation.navigate("Home")}
              />
            </View>
            <View style={{ flex: 0.8, justifyContent: "center" }}>
              <MotiView
                delay={2600}
                from={{ opacity: 0, translateY: -10 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: "timing", duration: 450 }}>
                <TextCustom
                  weight='700Bold'
                  style={{ fontSize: 64, marginBottom: 40 }}>
                  Hi, I am Doddy
                </TextCustom>
              </MotiView>
              <MotiView
                delay={2800}
                from={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: "timing", duration: 450 }}>
                <TextCustom style={styles.contentText}>
                  Passionate mobile developer, mostly using React Native or
                  Flutter.
                </TextCustom>
                <TextCustom style={styles.contentText}>
                  I like to build beatiful and interactive User Interface such
                  as micro interaction and animation.
                </TextCustom>
                <TextCustom style={styles.contentText}>
                  Currently learning android development using Kotlin and
                  Jetpack Compose.
                </TextCustom>
              </MotiView>
            </View>
            <View style={{ flex: 0.3, alignItems: "flex-end", paddingTop: 70 }}>
              <IconButton
                name='mail'
                size={49}
                color={colors.grey}
                delay={1800}
                style={{ marginBottom: "8%" }}
                onPress={() => window.open(`mailto:doddyrizaln@gmail.com`)}
              />
              <IconButton
                name='github'
                size={49}
                color={colors.grey}
                delay={2000}
                style={{ marginBottom: "8%" }}
                onPress={() =>
                  window.open("https://github.com/drzaln", "_blank")
                }
              />
              <IconButton
                name='linkedin'
                size={49}
                color={colors.grey}
                delay={2200}
                onPress={() =>
                  window.open("https://www.linkedin.com/in/drzaln/", "_blank")
                }
              />
            </View>
            <View style={styles.bannerFlex}>
              <IndonesiaBanner rotated={true} />
            </View>
          </View>
        }
        phoneComponent={<MobileAbout />}
      />
    </ScrollView>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    overflow: 'hidden'
  },
  bannerFlex: { flex: 0.05 },
  contentText: { fontSize: 36, marginTop: 30 },
})
