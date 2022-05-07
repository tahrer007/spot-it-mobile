import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Modal,
TouchableOpacity,
Button
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from "react-native-maps";
import HaifaCoords from "../services/haifaCoords";
import mapStyles from "../styles/mapStyles";
import inPolygon from "../services/inPolygon";
import ReusableButton from  "../components/reusabeles/Button"
//import LocationDetailsForm from "../components/LocationDetailsForm";

const initialRegion = {
  latitude: 32.794241949530296,
  longitude: 34.98972566204482,
  latitudeDelta: 0.09,
  longitudeDelta: 0.02,
};

const LocationsMap = () => {
  const [markers, setMarkers] = useState([]);
  const [region, setRegion] = useState(initialRegion);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    //console.log(markers);
  }, [markers]);

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <View style={styles.buttonsBox}>
              <ReusableButton title={"Submit"}/>
              <ReusableButton title={"Cancel"}/>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsBox : {
    flexDirection : "row"
  },
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default LocationsMap;
