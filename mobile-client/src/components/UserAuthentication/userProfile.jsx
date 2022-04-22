import React from "react";
import { View, Text ,StyleSheet } from "react-native";
//if the user logged in it will show log out button and user details 
//other wise will show log in /sign up / sign up by google
const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text> user Profile  </Text>
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
