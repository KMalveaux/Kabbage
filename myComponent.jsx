import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

function MyComponent() {
  const [inputText, setInputText] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Enter some text"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Button
        title="Click me"
        onPress={() => console.log("Button was clicked!")}
        disabled={!inputText}
      />
    </View>
  );
}

export default MyComponent;
