import React from "react";

import "react-native-gesture-handler";
import LogInScreen from "../screens/LogInScreen";
import AboutScreen from "../screens/AboutScreen";
import LocationsMap from "../screens/LocationsMap";
import RedNeighborhoods from "../screens/RedNeighborhoods";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator initialRouteName="Locations Map">
      <Drawer.Screen name="Locations Map" component={LocationsMap} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="red Neighborhoods" component={RedNeighborhoods} />
      <Drawer.Screen name="Login" component={LogInScreen} />
    </Drawer.Navigator>
  );
};

export default Routes;
