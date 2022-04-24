import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import ByGoogle from "../components/UserAuthentication/ByGoogle";
import UserProfile from "../components/UserAuthentication/UserProfile";
import CreateUser from "../components/UserAuthentication/SignUp";
import SignIn from "../components/UserAuthentication/SignIn";

const Stack = createNativeStackNavigator();

const UserAuthentication = () => {
  return (
      <Stack.Navigator  initialRouteName="UserProfile"   >
        <Stack.Screen name="UserProfile" component={UserProfile}  />
        <Stack.Screen name="ByGoogle" component={ByGoogle}  />
        <Stack.Screen name="SignIn" component={SignIn}   />
        <Stack.Screen name="signup" component={CreateUser}  />
      </Stack.Navigator>
  );
};

export default UserAuthentication;
