import React from "react";

import "react-native-gesture-handler";
import LogInScreen from "../screens/LogInScreen";
import HomeScreen from "../screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="login" component={LogInScreen} />
      <Drawer.Screen name="home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default Routes;
