import React from "react";
import { View, Text ,StyleSheet} from "react-native";

const LocationsMap = () => {
  return (
    <View style={styles.container}>
      
      <Text>Locations Map</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LocationsMap;
