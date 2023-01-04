import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
  Button,
} from "react-native";
import MyPressable from "./myPressable";

export default function App() {
  const [Input, onInputChange] = useState(); // This is the first input the user gives. The "Word" to be given a defition.
  const [changeable, setChangable] = useState("Word"); //This is the text the changes between "word" and "definition"
  const slideAnimation = useRef(new Animated.Value(0)).current;

  const slide = () => {
    // An animation that moves the word "Word" or "Definition" to the left or to the right.
    if (changeable == "Word") {
      Animated.timing(slideAnimation, {
        toValue: 230,
        duration: 1000,
      }).start();
    } else if (changeable == "Definition") {
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 1000,
      }).start();
    }
  };

  function switchToDefinition() {
    console.log("Input entered.");
    setChangable("Definition");
    slide();
  }

  function goBack() {
    setChangable("Word");
    slide();
  }

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
      <Animated.View style={[styles.subcontainer, { left: slideAnimation }]}>
        <Text style={styles.textSub}>{changeable}</Text>
      </Animated.View>
      <View style={styles.subcontainer}>
        {changeable == "Definition" && <Button title="Back" onPress={goBack} />}
        <TextInput style={styles.input} onChangeText={onInputChange} />
        <MyPressable disabled={!Input} onPress={switchToDefinition} />
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
  buttonInvisible: {
    width: 0,
    height: 0,
  },
  buttonVisible: {
    height: 20,
    width: 30,
  },
});
