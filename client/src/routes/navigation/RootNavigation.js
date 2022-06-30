import { createNavigationContainerRef } from "@react-navigation/native";

const navigationRef = createNavigationContainerRef();

const navigate = (name) =>
  navigationRef.isReady()
    ? navigationRef.navigate(name)
    : console.log("error ref nav ");

export default navigate;
