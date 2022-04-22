import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserAuthentication from "../routes/navigation/UserAuthentication";
const Stack = createNativeStackNavigator();

const LogInScreen = () => {
  return (
   
      <UserAuthentication />
   
  );
};

export default LogInScreen;
