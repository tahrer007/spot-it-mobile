import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInScreen from "../../screens/LogInScreen";
import ByGoogle from "../../components/UserAuthentication/ByGoogle";
import CreateUser from "../../components/UserAuthentication/SignUp";
import SignIn from "../../components/UserAuthentication/SignIn";

const Stack = createNativeStackNavigator();

const UserAuthentication = () => {
  return (
      <Stack.Navigator  initialRouteName="LogInScreen">
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="ByGoogle" component={ByGoogle} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="CreateUser" component={CreateUser} />
      </Stack.Navigator>
  );
};

export default UserAuthentication;
