import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import CardCreation from "./CardCreation";

const Stack = createNativeStackNavigator();

const App = () => {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CardCreation" component={CardCreation} />
    </Stack.Navigator>
  </NavigationContainer>;
};

export default App;
