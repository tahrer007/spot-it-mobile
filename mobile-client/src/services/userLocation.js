import Geolocation from "react-native-geolocation-service";


const userLocation =()=>{
    Geolocation.getCurrentPosition(
        position => {
         const test ={
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            coordinates: this.state.coordinates.concat({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            })
          };
          console.log(test) ; 
          return test ; 
        
        },
        error => {
            console.log(error.message.toString())
          Alert.alert(error.message.toString());
        },
        {
          showLocationDialog: true,
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 0
        }
      );
}
export default userLocation 