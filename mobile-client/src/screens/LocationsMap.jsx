import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from "react-native-maps";
import HaifaCoords from "../services/haifaCoords";
import mapStyles from "../styles/mapStyles";
import inPolygon from "../services/inPolygon";
import LocationDetailsForm from "../components/LocationDetailsForm";
import { getAllLocations } from "../services/api/locations/locations";
import { formatRelative } from "date-fns";
import Geolocation from "react-native-geolocation-service";
import userGeoLocation from "../services/userGeoLocation";

import io from "socket.io-client";
import { set } from "date-fns/esm";

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
  const [newMarker, setNewMarker] = useState({});
  const [userGeoLocation, setUserGeoLocation] = useState({});

  const getUserLocation = () => {
    const userLocation = userGeoLocation();
    if (!typeof userLocation === "string") setUserGeoLocation(userLocation);
  };

  useEffect(() => {
    const socket = io("http://215b-109-64-9-153.ngrok.io/socket");
    socket.on("newLocation", (newMarker) => {
      console.log(newMarker);
      setMarkers((prevState )=>[...prevState ,newMarker]);
    });
  }, []);
  useEffect(async () => {
    setTimeout(async () => {
      const response = await getAllLocations();
      //console.log(response);
      response?.status === "ok"
        ? intialMarks(response.data)
        : setError(response);
    }, 1000);

    const intialMarks = (dbMarks) => setMarkers(dbMarks);
  }, []);

  const mapPress = (e) => {
    //console.log(e.nativeEvent.coordinate)

    const marker = {
      lat: e.nativeEvent.coordinate.latitude,
      lng: e.nativeEvent.coordinate.longitude,
      //time: new Date(),
    };
    if (inPolygon(marker)) {
      marker.time = new Date();

      setNewMarker(marker);
      setModalVisible(!modalVisible);
      //setMarkers((oldMarkers) => [...oldMarkers, newLocation]);
    }
  };

  const hideModel = () => setModalVisible(!modalVisible);
  const formateDateTime = (dateTime) =>
    formatRelative(Date.parse(dateTime), new Date());

  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        style={styles.map}
        initialRegion={region}
        zoomControlEnabled={true}
        zoomEnabled={true}
        rotateEnabled={true}
        onRegionChange={() => setRegion(region)}
        onPress={mapPress}
        mapType={"standard"}
        provider={PROVIDER_GOOGLE}
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
                title={"Alert"}
                description={
                  marker.number + " spotted " + formateDateTime(marker.time)
                }
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
      {modalVisible && (
        <LocationDetailsForm hideModel={hideModel} newMarker={newMarker} />
      )}
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
    width: (Dimensions.get("window").width * 95) / 100,
    height: (Dimensions.get("window").height * 90) / 100,
  },
  markerIcon: {
    height: 30,
    width: 30,
  },
});

export default LocationsMap;
