import React from "react";

import "react-native-gesture-handler";
import LogInScreen from "../screens/LogInScreen";
import HomeScreen from "../screens/HomeScreen";
import LocationMaps from "../screens/LocationMaps";
import RedNeighborhoods from "../screens/RedNeighborhoods";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="login" component={LogInScreen} />
      <Drawer.Screen name="home" component={HomeScreen} />
      <Drawer.Screen name="locationMaps" component={LocationMaps} />
      <Drawer.Screen name="redNeighborhoods" component={RedNeighborhoods} />
    </Drawer.Navigator>
  );
};

export default Routes;
