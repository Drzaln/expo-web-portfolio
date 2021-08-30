import React from "react"
import { StyleSheet, View } from "react-native"
import Button from "../components/Button"
import Icons from "../components/Icons"
import SwitchComponent from "../components/SwitchComponent"
import TextCustom from "../components/TextCustom"
import { colors } from "../constant"

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SwitchComponent
        desktopComponent={
          <View>
            <TextCustom>About</TextCustom>
          </View>
        }
        phoneComponent={
          <View style={{ paddingTop: 40, paddingBottom: 60 }}>
            <Button
              type='about'
              width={"55%"}
              delay={0}
              right={"50%"}
              renderInsideBar={
                <View style={{ marginLeft: 20 }}>
                  <Icons name='left' size={30} />
                </View>
              }
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        }
      />
    </View>
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
