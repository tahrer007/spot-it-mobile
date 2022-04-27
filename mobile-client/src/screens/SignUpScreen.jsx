import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ReusableButton from "../components/reusabeles/Button";
import InputField from "../components/reusabeles/InputField";
import Linked from "../components/reusabeles/Linked";

const SignUpScreen = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const OnPress = (routeName) => {};

  return (
    <View style={styles.container}>
      <InputField
        placeholder="user name"
        secureTextEntry={false}
        value={userName}
        onChangeText={(userName) => setUserName(userName)}
      />
      <InputField
        placeholder="email"
        secureTextEntry={false}
        value={userEmail}
        onChangeText={(userEmail) => setUserEmail(userEmail)}
      />
      <InputField
        placeholder="password"
        secureTextEntry={true}
        value={userPassword}
        onChangeText={(userPassword) => setUserPassword(userPassword)}
      />

      <ReusableButton onPress={OnPress} title="Sign Up" routeName={"signup"} />
      <Linked
        text="already have an account ? sign in instead"
        routeName="login"
      />
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

export default SignUpScreen;
