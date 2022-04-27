import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ToggleButton from "../components/reusabeles/ToggleButton";

const LogInScreen = () => {
  return (
    <View style={styles.container}>
      <Text> sign in </Text>
      <ToggleButton label={"Remmber me"} />
      <ToggleButton label={"auto login"} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LogInScreen;
