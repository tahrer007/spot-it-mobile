import 'react-native-gesture-handler';

import react from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LogInScreen from "../screens/LogInScreen";
import HomeScreen from "../screens/HomeScreen";
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
