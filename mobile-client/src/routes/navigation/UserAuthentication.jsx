import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreateUser from "../../components/UserAuthentication/SignUp";
import SignIn from "../../components/UserAuthentication/SignIn";

const Stack = createNativeStackNavigator();

const UserAuthentication = () => {
  return (
    <Stack.Navigator initialRouteName="signin">
      <Stack.Screen name="signin" component={SignIn} />
      
      <Stack.Screen name="signup" component={CreateUser} />
    </Stack.Navigator>
  );
};

export default UserAuthentication;
