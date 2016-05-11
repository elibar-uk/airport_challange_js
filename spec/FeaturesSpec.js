
// 'use strict';
describe('Feature Test:', function(){

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });
  describe('has a landing status', function(){
    it('returns landed when it is landed', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });
    it('planes can take off', function(){
      plane.land(airport);
      plane.takeoff(airport);
      expect(airport.planes()).not.toContain(plane);
    });
    it('prevents the plane from take off when stormy', function(){
      plane.land(airport);
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){plane.takeoff(airport);}).toThrowError('it is too stomy to take off');
      expect(airport.planes()).toContain(plane);
    });
    it('prevents the plane from landing when stormy', function(){
      plane.takeoff(airport);
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){plane.land(airport);}).toThrowError('it is too stomy to land');
      expect(airport.planes()).not.toContain(plane);
    });
  });
});
//// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
//
// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
//
// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy
//
// As an air traffic controller
// To ensure safety
// I want to prevent landing when weather is stormy
//
// As an air traffic controller
// To ensure safety
// I want to prevent landing when the airport is full
//
// As the system designer
// So that the software can be used for many different airports
// I would like a default airport capacity that can be overridden as appropriate
