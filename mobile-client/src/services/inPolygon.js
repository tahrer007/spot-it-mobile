//function to check if the location is inside the polygon

import { PolyUtil } from "node-geometry-library";
import HaifaCoords from "./haifaCoords";

const inPolygon = (location) =>{

  const test = {
    lat : location.latitude , 
    lng : location.longitude , 
  
  } 
    return PolyUtil.containsLocation(test, HaifaCoords);
}


export default inPolygon;
