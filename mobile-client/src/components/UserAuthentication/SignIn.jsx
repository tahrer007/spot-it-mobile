import React from "react";
import { View, Text ,StyleSheet } from "react-native";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text> sign in  </Text>
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
