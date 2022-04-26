import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet ,TouchableOpacity } from "react-native";
import ReusableButton from "../reusabeles/Button";
import InputField from "../reusabeles/InputField";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const signup=()=>console.log("Test")

  const OnPress = (routeName) => {
    
  };

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
      
      <ReusableButton onPress={OnPress} title="Sign Up" RouteName={"signup"} />
      <TouchableOpacity OnPress={()=>console.log("next")}>
      <Text style={styles.linked}>
        already have an account ? sign in instead
      </Text>

      </TouchableOpacity>
      
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
  linked: {
    textDecorationLine: "underline",
  },
});

export default SignUp;
