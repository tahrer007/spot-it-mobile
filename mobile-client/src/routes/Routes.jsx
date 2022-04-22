import React from "react";

import "react-native-gesture-handler";
import LogInScreen from "../screens/LogInScreen";
import HomeScreen from "../screens/HomeScreen";
import LocationsMap from "../screens/LocationsMap";
import RedNeighborhoods from "../screens/RedNeighborhoods";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={LogInScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Locations Map" component={LocationsMap} />
      <Drawer.Screen name="red Neighborhoods" component={RedNeighborhoods} />
    </Drawer.Navigator>
  );
};

export default Routes;
