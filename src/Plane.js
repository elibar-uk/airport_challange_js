"use strict";
function Plane(){

  Plane.prototype.land = function(airport) {
    airport.clearForLanding(this);
  };

  Plane.prototype.takeoff = function(airport){
    airport.clearForTakeOff(this);
  };
}
//   // something complicated
//   throw new Error("not yet implemented");
// };
