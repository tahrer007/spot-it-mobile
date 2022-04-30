import React, { useEffect, useState ,useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ReusableButton from "../components/reusabeles/Button";
import InputField from "../components/reusabeles/InputField";
import Linked from "../components/reusabeles/Linked";
import { Context as AuthContext } from "../context/AuthContext";
const SignupScreen = () => {
  const {state,signup} = useContext(AuthContext) ;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const OnPress = (routeName) => {
    signup({email,password}) ; 
  };

  useEffect(() => {
    //console.log(isSignedIn);
  }, []);

  return (
    <View style={styles.container}>
      <InputField
        placeholder="user name"
        secureTextEntry={false}
        value={name}
        onChangeText={(name) => setName(name)}
      />
      <InputField
        placeholder="email"
        secureTextEntry={false}
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <InputField
        placeholder="password"
        secureTextEntry={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
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

export default SignupScreen;
