import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  

  const searchLocation =()=>{
    const center = { lat: 32.794241949530296,
        lng: 34.98972566204482, };
      // Create a bounding box with sides ~10km away from the center point
      const defaultBounds = {
        north: center.lat + 0.05,
        south: center.lat -  0.05,
        east: center.lng +  0.05,
        west: center.lng -  0.05,
      };
    
      const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
      } = usePlacesAutocomplete({
        requestOptions: {
          bounds: defaultBounds,
          componentRestrictions: {country: "il"},
          fields: ["address_components", "geometry", "icon", "name"],
          strictBounds: true,
          //types: ["establishment"],
        },
      });
      const handleInput = (e) => {
        setValue(e.target.value);
      };
    
      const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
    
        try {
          const results = await getGeocode({ address });
          console.log(results);
          const { lat, lng } = await getLatLng(results[0]);
    
          return { lat, lng };
        } catch (error) {
          console.log("😱 Error: ", error);
        }
      };
  }

  export default searchLocation 