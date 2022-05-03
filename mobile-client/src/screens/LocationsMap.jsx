import React from "react";
import { View, Text ,StyleSheet ,Dimensions } from "react-native";
import MapView from 'react-native-maps';
import Polygon from 'react-native-maps';
import HaifaCoords from "../services/haifaCoords"
const initialRegion={
  latitude: 32.794241949530296,
  longitude:  34.98972566204482,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const LocationsMap = () => {
  return (
    <View style={styles.container}>
      
      <MapView style={styles.map}
      region ={initialRegion}
      >
       
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default LocationsMap;
