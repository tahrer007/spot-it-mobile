import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import UserAuthentication from "../routes/navigation/userAuthentication";

const LogInScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        onPress={()=>console.log("new user")}
        title="new User"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={()=>console.log("sign already")}
        title="sign already"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
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

export default LogInScreen;
