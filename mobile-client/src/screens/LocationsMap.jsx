import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from "react-native-maps";
import HaifaCoords from "../services/haifaCoords";
import mapStyles from "../styles/mapStyles";
import inPolygon from "../services/inPolygon";

const initialRegion = {
  latitude: 32.794241949530296,
  longitude: 34.98972566204482,
  latitudeDelta: 0.09,
  longitudeDelta: 0.02,
};

const LocationsMap = () => {
  const [markers, setMarkers] = useState([]);
  const [region, setRegion] = useState(initialRegion);

  useEffect(() => {
    console.log(markers);
  }, [markers]);

  const mapPress = (e) => {
    const newLocation = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    };
    setMarkers((oldMarkers) => [...oldMarkers, newLocation]);
  };

  return (
    <View style={styles.container}>
      <MapView
        showsMyLocationButton={true}
        style={styles.map}
        //ref={mapRef}
        initialRegion={region}
        zoomControlEnabled={true}
        zoomEnabled={true}
        provider={PROVIDER_GOOGLE}
        showsCompass={true}
        onRegionChange={() => setRegion(region)}
        onPress={mapPress}
        mapType={"standard"}
      >
        {/*<MapView.Polygon
          coordinates={HaifaCoords}
          fillColor="rgb(243,243,243)"
          strokeColor="rgba(0,0,0,0.5)"
          strokeWidth={3}
          tappable={true}
          //onPress={mapPressed}
  />*/}

        {markers.length
          ? markers.map((marker, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title={"test!!!"}
                description={"description !!! "}
              >
                <Image
                  source={require("../../assets/pumbaa.png")}
                  style={styles.markerIcon}
                  resizeMode="contain"
                />
              </Marker>
            ))
          : null}
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
    height: (Dimensions.get("window").height * 90) / 100,
  },
  markerIcon: {
    height: 30,
    width: 30,
  },
});

export default LocationsMap;
