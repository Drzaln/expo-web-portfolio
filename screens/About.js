import React from "react"
import { StyleSheet, Text, View } from "react-native"
import SwitchComponent from "../components/SwitchComponent"

const About = () => {
  return (
    <SwitchComponent
      desktopComponent={
        <View>
          <Text>About</Text>
        </View>
      }
      phoneComponent={
        <View>
          <Text>About</Text>
        </View>
      }
    />
  )
}

export default About

const styles = StyleSheet.create({})
