import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from "react-native-maps";
import HaifaCoords from "../services/haifaCoords";
const initialRegion = {
  latitude: 32.794241949530296,
  longitude: 34.98972566204482,
  latitudeDelta: 0.009,
  longitudeDelta: 0.009,
};

const LocationsMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={initialRegion}
        //provider={PROVIDER_GOOGLE}
        zoomControlEnabled={true}
        zoomEnabled={true}
      >
        <MapView.Polygon
          coordinates={HaifaCoords}
          fillColor={"#d3d3d3"}
          strokeColor="rgba(0,0,0,0.5)"
          strokeWidth={2}
          
        />
        {/*{HaifaCoords.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.lat, longitude: marker.lng }}
            title={"test!!!"}
            description={"description !!! "}
          />
        ))}*/}
      </MapView>
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default LocationsMap;
