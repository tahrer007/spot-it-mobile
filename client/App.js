import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from './src/routes/navigation/RootNavigation';
import Routes from "./src/routes/Routes";
import { Provider as AuthProvider } from "./src/context/AuthContext";



export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}
