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
  const [markers, setMarkers] = useState([]);
  const [region, setRegion] = useState(initialRegion);

  useEffect(()=>{
   //console.log(Dimensions.get("window").height*90/100)
  },[])

  useEffect(() => {
    //const lat = 32.794241949530296;
    //const lng = 34.98972566204482;
    //console.log(inPolygon({ lat: 32.794241949530296, lng: 34.98972566204482 }));
    console.log(markers);
  }, [markers]);

  //const addMarker = (marker) => console.log(JSON.stringify(marker.currentTarget.viewConfig.NativeProps.coordinates));
  const mapPressed = (e) => {
    // console.log(e.nativeEvent.coordinate)
    //setMarkers(e.nativeEvent.action);
    setMarkers((oldArray) => [...oldArray, e.nativeEvent.coordinate]);

    //console.log(e.nativeEvent.coordinate);
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
      mapRef.current = map;
    }, []);

  };
  return (
    <View style={styles.container}>
      <MapView
        showsMyLocationButton={true}
        style={styles.map}
        ref={mapRef}
        initialRegion={region}
        zoomControlEnabled={true}
        zoomEnabled={true}
        provider={PROVIDER_GOOGLE}
        showsCompass={true}
        onRegionChange={() => setRegion(region)}
        onPress={mapPressed}
        mapType={"standard"}
      >
        <MapView.Polygon
          coordinates={HaifaCoords}
          fillColor="rgb(243,243,243)"
          strokeColor="rgba(0,0,0,0.5)"
          strokeWidth={3}
          tappable={true}
          //onPress={mapPressed }
        />
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
              />
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
    height: (Dimensions.get("window").height*90/100),
  },
});

export default LocationsMap;
