import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { StyleSheet, Text, TextInput, View, Animated } from "react-native";
import MyPressable from "./myPressable";

export default function App() {
  const [Input, onInputChange] = useState();

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
          alignSelf: "center",
          letterSpacing: 2.5,
        }}
      >
        Kabbage!
      </Text>
      <Animated.View style={styles.subcontainer}>
        {/* This view block contains everything besides Kabbage!*/}
        <Text style={styles.textSub}>Word</Text>
      </Animated.View>
      <View style={styles.subcontainer}>
        <TextInput style={styles.input} onChangeText={onInputChange} />
        <MyPressable disabled={!Input} onPress={switchToDefinition} />
      </View>
    </View>
  );
}

function switchToDefinition() {
  console.log("Input entered.");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#C6FFC0",
  },
  subcontainer: {
    top: "20%",
    paddingHorizontal: 20,
  },
  input: {
    alignSelf: "stretch",
    borderWidth: 3,
    borderRadius: 10,
    paddingHorizontal: 30,
    height: "20%",
    fontSize: 20,
  },
  textSub: {
    fontSize: 20,
    fontWeight: "300",
  },
});
