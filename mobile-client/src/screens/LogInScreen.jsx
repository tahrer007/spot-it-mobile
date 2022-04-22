import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserAuthentication from "../routes/navigation/userAuthentication";
const Stack = createNativeStackNavigator();

const LogInScreen = () => {
  return (
    <Stack.Navigator>
        <UserAuthentication />
      </Stack.Navigator>
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
