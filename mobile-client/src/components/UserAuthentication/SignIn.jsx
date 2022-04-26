import React from "react";
import { View, Text ,StyleSheet } from "react-native";
import ToggleButton from "../reusabeles/ToggleButton";


const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text> sign in  </Text>
      <ToggleButton label={"Remmber me"}/>
      <ToggleButton label={"auto login"}/>
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

export default SignIn;
