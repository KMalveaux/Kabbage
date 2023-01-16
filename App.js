import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 300 }}>Home Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
