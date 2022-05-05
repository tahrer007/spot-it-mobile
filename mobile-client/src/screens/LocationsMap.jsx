import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
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
  const [marks, setMarks] = useState([]);
  const [region, setRegion] = useState(initialRegion);

  useEffect(() => {
    const lat = 32.794241949530296;
    const lng = 34.98972566204482;
    console.log(
      inPolygon({ lat: 32.794241949530296, lng: 34.98972566204482 })
    );
  }, []);

  //const addMarker = (marker) => console.log(JSON.stringify(marker.currentTarget.viewConfig.NativeProps.coordinates));
  const mapPressed =()=>{

  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        zoomControlEnabled={true}
        zoomEnabled={true}
        provider={PROVIDER_GOOGLE}
        showsCompass={true}
        showsMyLocationButton={true}
        onRegionChange={() => setRegion(region)}
        onPress={mapPressed }
      >
        <MapView.Polygon
          coordinates={HaifaCoords}
          fillColor="rgb(243,243,243)"
          strokeColor="rgba(0,0,0,0.5)"
          strokeWidth={3}
          tappable={true}
          //onPress={(e)=>console.log(e.nativeEvent.coordinate)}
          
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
