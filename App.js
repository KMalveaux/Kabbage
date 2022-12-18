import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import MyButton from "./myButton";

export default function App() {
  const [word, onWordChange] = useState();

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
          alignSelf: "center",
        }}
      >
        Kabbage!
      </Text>
      <View style={styles.subcontainer}>
        {/* This view block contains everything besides Kabbage!*/}
        <Text style={styles.textSub}>Word</Text>
        <TextInput style={styles.input} onChangeText={onWordChange} />
        <TouchableOpacity
          style={{
            alignSelf: "center",
            height: "20%",
            width: "50%",
            backgroundColor: "#398640",
            justifyContent: "center",
            borderRadius: 30,
            marginTop: 20,
            elevation: 5,
          }}
          disabled={!word}
        >
          {/* The 'elevation' under the styling above is specific to android and needs to be adjust for corss-platform compatibility later */}
          <Text
            style={{ alignSelf: "center", fontSize: 40, fontWeight: "500" }}
          >
            Enter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
