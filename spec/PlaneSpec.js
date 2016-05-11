// 'use strict';
describe('Plane', function(){

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);
  });

  it('has landing function', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('has a take off function', function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane);
  });
});
