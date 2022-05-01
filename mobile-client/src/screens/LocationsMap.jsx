import React from "react";
import { View, Text ,StyleSheet ,Dimensions } from "react-native";
import MapView from 'react-native-maps';

const LocationsMap = () => {
  return (
    <View style={styles.container}>
      
      <MapView style={styles.map} />
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
