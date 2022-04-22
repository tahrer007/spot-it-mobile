import React from "react";
import { View, Text ,StyleSheet } from "react-native";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text> Create new user </Text>
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

export default SignUp;
