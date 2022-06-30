import React ,{useContext,useState ,useEffect}from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ToggleButton from "../components/reusabeles/ToggleButton";
import ReusableButton from "../components/reusabeles/Button";

import Linked from "../components/reusabeles/Linked";
import InputField from "../components/reusabeles/InputField";
import { Context as AuthContext } from "../context/AuthContext";

const LoginScreen = () => {
  const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    console.log(state);
  }, [state]);
  const OnPress = (routeName) => {
    signin({ email, password });
  };
  return (
    <View style={styles.container}>
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

      <ToggleButton label={"Remmber me"} />
      <Linked
        text="This is your first time? sign up instead"
        routeName="signup"
      />
      <ReusableButton onPress={OnPress} title="Sign in" routeName={"signup"} />
      {/*<ToggleButton label={"auto login"} />*/}
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
  errrorMessage: {
    color: "red",
    fontSize: 18,
  },
});

export default LoginScreen;
