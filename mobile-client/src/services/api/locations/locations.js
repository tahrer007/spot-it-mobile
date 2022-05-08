import api from "../api";

const getAllLocations = async () => {

  try {
    const { data } = await api.get("locations/allLocations");
    return { status: "ok", data };
  } catch (error) {
    console.log(error.message);
    return { status: "error", message: error.message };
  }
};

export { getAllLocations  };
const addLocation = async (newLocation) => {
    console.log(newLocation) ; 
   
    try {
        const response = await api.post("locations/newLocation");
       console.log(response)
      } catch (error) {
        console.log(error.message);
        
      }
   
  };

