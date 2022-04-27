import React from "react";

import "react-native-gesture-handler";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import AboutScreen from "../screens/AboutScreen";
import AccountScreen from "../screens/AccountScreen";
import SosScreen from "../screens/SosScreen";
import LocationsMap from "../screens/LocationsMap";
import RedNeighborhoods from "../screens/RedNeighborhoods";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator initialRouteName="Locations Map">
       <Drawer.Screen name="login" component={LoginScreen} />
       <Drawer.Screen name="signup" component={SignupScreen} />
      <Drawer.Screen name="Locations Map" component={LocationsMap}  />
      <Drawer.Screen name="Red Neighborhoods" component={RedNeighborhoods} />
      <Drawer.Screen name="sos" component={SosScreen} />
      <Drawer.Screen name="acount" component={AccountScreen} />
     
    </Drawer.Navigator>
  );
};

export default Routes;
