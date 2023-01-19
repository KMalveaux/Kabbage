import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <Button
        title={"Press me"}
        onPress={() => navigation.navigate("CardCreation")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
