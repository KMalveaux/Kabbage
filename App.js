import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import MyPressable from "./myPressable";

export default function App() {
  const [definition, ondefinitionChange] = useState();

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
      <View style={styles.subcontainer}>
        {/* This view block contains everything besides Kabbage!*/}
        <Text style={styles.textSub}>Word</Text>
        <TextInput style={styles.input} onChangeText={ondefinitionChange} />
        <MyPressable disabled={!definition} onPress={processDefinition} />
      </View>
    </View>
  );
}

function processDefinition() {
  console.log("definition entered.");
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
