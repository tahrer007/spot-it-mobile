import {myApi} from "../api";

const getAllLocations = async () => {

  try {
    const { data } = await myApi.get("locations/allLocations");
    return { status: "ok", data };
  } catch (error) {
    console.log(error.message);
    return { status: "error", message: error.message };
  }
};


const addLocation = async (newLocation) => {
    console.log(newLocation) ; 
   
    try {
        const response = await myApi.post("locations/newLocation",newLocation);
       console.log(response)
       return response ; 
      } catch (error) {
        //console.log(error.message);
        return "error"
        
      }
   
  };
  export { getAllLocations , addLocation };
