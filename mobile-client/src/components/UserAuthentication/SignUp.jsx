import React  ,{useEffect , useState}from "react";
import { View, Text ,StyleSheet } from "react-native";
import ReusableButton from "../reusabeles/Button";
import InputField from "../reusabeles/InputField" ;
import ToggleButton from "../reusabeles/ToggleButton";
 

const SignUp = () => {
  const [userName,setUserName]=useState("");
  const [userEmail,setUserEmail]=useState("");
  const [userPassword,setUserPassword]=useState("");

  const OnPress = (routeName) => console.log(routeName);

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
      <ToggleButton label={"Remmber me"}/>
      <ToggleButton label={"auto login"}/>
    <ReusableButton onPress={OnPress} title="Sign Up" RouteName={"signup"} />

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
