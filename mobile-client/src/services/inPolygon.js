//function to check if the location is inside the polygon

import { PolyUtil } from "node-geometry-library";
import HaifaCoords from "./haifaCoords";

const inPolygon = (location) => 
  PolyUtil.containsLocation(location, HaifaCoords);
 

export default inPolygon;
