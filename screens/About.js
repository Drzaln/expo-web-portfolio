import React from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import MobileAbout from "../components/MobileAbout"
import SwitchComponent from "../components/SwitchComponent"
import TextCustom from "../components/TextCustom"
import { colors } from "../constant"

const About = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <SwitchComponent
        desktopComponent={
          <View>
            <TextCustom>About</TextCustom>
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
    overflow: "hidden",
  },
})
