//function to check if the location is inside the polygon

import { PolyUtil } from "node-geometry-library";
import HaifaCoords from "./haifaCoords";

const isInsidePolygon = (location) => 
  PolyUtil.containsLocation(location, HaifaCoords);
 

export default isInsidePolygon;
