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
        <Pressable
          style={styles.buttonEnabled}
          disabledStyle={styles.buttonDisabled}
          disabled={!word}
          onPress={processDefinition}
        >
          <Text>Enter</Text>
        </Pressable>
        {/* TODO: The 'elevation' under the styling above is specific to android and needs to be adjust for corss-platform compatibility later */}
      </View>
    </View>
  );
}

function processDefinition() {
  console.log("Word entered.");
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
  buttonEnabled: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "brown",
  },
  buttonDisabled: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "blue",
  },
});
{
  /* TODO: The 'elevation' under the styling above is specific to android and needs to be adjust for corss-platform compatibility later */
}
