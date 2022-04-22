import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ReusableButton from "../reusabeles/Button";
//if the user logged in it will show log out button and user details
//other wise will show log in /sign up / sign up by google
const UserProfile = () => {
  const OnPress = (title) => console.log(title);
  return (
    <View style={styles.container}>
      <ReusableButton onPress={OnPress} title="Log In" />
      <ReusableButton onPress={OnPress} title="Sign Up" />
      <ReusableButton onPress={OnPress} title="Sign up By Google" />
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

export default UserProfile;
