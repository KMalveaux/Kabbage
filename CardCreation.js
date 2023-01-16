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

/*
This is the "card creation" page of the app. It has two "stages". The input stage, where the user is entering a input, or the first part of the card, and the "definition" stage,
where the user is entering a definition for their supplied input.

The text input on this page works as follows. The user can only press enter when the text input is filled with any text. 
When the user presses enter, a function is called that decides what should take place, either switching to the definition stage or creating the card, 
by looking at the value of changeable. 

Changeable is a state the can be seen visually on the page as the text that slides left to right above the text input when the user enters an input and presses enter, or the user presses 
the go back button after supplying an input. Changeable should only flip between the strings "Word" and "Definition". Everytime changeable flips between the two strings, 
the text input is replaced with a visually identical text input that is instead assigned with the according state for that stage of card creation, i.e. "onInputChange" for
giving an input and then "onDefinitionChange" for giving a definition.
*/
export default function App() {
  const [Input, onInputChange] = useState(); // This is the first input the user gives. The "Word" to be given a defition.
  const [Definition, onDefinitionChange] = useState();
  const [changeable, setChangable] = useState("Word"); //This is the text the changes between "word" and "definition"
  const slideAnimation = useRef(new Animated.Value(0)).current;

  // An animation that moves the word "Word" or "Definition" to the left or to the right.
  const slide = () => {
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

  // Decides what to do next when the enter button is pressed depending on the stage current stage of card creation.
  function switchStage() {
    if (changeable == "Word") {
      setChangable("Definition");
      console.log("Input entered: " + Input);
      slide();
    } else if (changeable == "Definition") {
      // Finalize and create the card then go back to the input stage to begin creating a new card.
      createCard();
      goBack();
    }
  }

  // Called when the user presses the enter button after supplying a definition.
  function createCard() {
    console.log(
      "Card created. Input = " + Input + ". Definition = " + Definition
    );
  }

  //Called when the user presses the go back button that appears after supplying an input and pressing enter.
  function goBack() {
    setChangable("Word");
    slide();
  }

  //The visually identical input text with different states depending on the stage
  var textField;
  if (changeable == "Word") {
    textField = <TextInput style={styles.input} onChangeText={onInputChange} />;
  } else if (changeable == "Definition") {
    textField = (
      <TextInput style={styles.input} onChangeText={onDefinitionChange} />
    );
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
        {textField}
        <MyPressable disabled={!Input} onPress={switchStage} />
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
