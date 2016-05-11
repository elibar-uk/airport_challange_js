function Airport(weather) {
  "use strict";
  this._hanger = [];
  this.weather = new Weather();
  
}
  Airport.prototype.planes = function(){
    return this._hanger;
  };
  Airport.prototype.clearForLanding = function(plane) {
    if (this.weather.isStormy()){
      throw new Error('it is too stomy to land');
    }
    this._hanger.push(plane);
  };

  Airport.prototype.clearForTakeOff = function(plane) {
    if (this.weather.isStormy()){
      throw new Error('it is too stomy to take off');
    }
    this._hanger.pop(plane);
  };

  // Airport.prototype.isStormy = function(){
  //   return false;
  // };
