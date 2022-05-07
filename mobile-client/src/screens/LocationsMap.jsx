import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from "react-native-maps";
import HaifaCoords from "../services/haifaCoords";
import mapStyles from "../styles/mapStyles";
import inPolygon from "../services/inPolygon";
import LocationDetailsForm from "../components/LocationDetailsForm";
import { getAllLocations } from "../services/api/locations/locations";

const initialRegion = {
  latitude: 32.794241949530296,
  longitude: 34.98972566204482,
  latitudeDelta: 0.09,
  longitudeDelta: 0.02,
};

const LocationsMap = () => {
  const [markers, setMarkers] = useState([]);
  const [error, setError] = useState({});
  const [region, setRegion] = useState(initialRegion);
  const [modalVisible, setModalVisible] = useState(false);

  const intialMarks = (dbMarks) => setMarkers(dbMarks);

  useEffect(async () => {
    const response = await getAllLocations();
    response.status === "ok" ? intialMarks(response.data) : setError(response);
  }, []);

  const mapPress = (e) => {
    //console.log(e.nativeEvent.coordinate)

    const newLocation = {
      lat: e.nativeEvent.coordinate.latitude,
      lng: e.nativeEvent.coordinate.longitude,
    };
    if (inPolygon(newLocation)) {
      setModalVisible(!modalVisible);
      setMarkers((oldMarkers) => [...oldMarkers, newLocation]);
    }
  };

  const hideModel = () => setModalVisible(!modalVisible);

  return (
    <View style={styles.container}>
      <MapView
        showsMyLocationButton={true}
        style={styles.map}
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
          onPress={mapPress}
        />*/}

        {markers.length
          ? markers.map((marker, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: marker.lat,
                  longitude: marker.lng,
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
      {modalVisible && <LocationDetailsForm hideModel={hideModel} />}
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
