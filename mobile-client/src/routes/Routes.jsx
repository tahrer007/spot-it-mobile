import React from "react";

import "react-native-gesture-handler";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import AboutScreen from "../screens/AboutScreen";
import LocationsMap from "../screens/LocationsMap";
import RedNeighborhoods from "../screens/RedNeighborhoods";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator initialRouteName="Locations Map">
       <Drawer.Screen name="log in" component={LogInScreen} />
       <Drawer.Screen name="sign Up" component={SignUpScreen} />
      <Drawer.Screen name="Locations Map" component={LocationsMap}  />
      <Drawer.Screen name="Red Neighborhoods" component={RedNeighborhoods} />
      <Drawer.Screen name="About" component={AboutScreen} />
     
    </Drawer.Navigator>
  );
};

export default Routes;
