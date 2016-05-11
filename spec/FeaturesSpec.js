
// 'use strict';
describe('Feature Test:', function(){

  var plane;
  var airport;
  var weather;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
    weather = jasmine.createSpyObj('weather', ['isStormy']);
  });

  describe('landing and taking off when calm', function(){
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(3);
      });
      it('plane is accepted for landing in the airport', function(){
        plane.land(airport);
        expect(airport.planes()).toContain(plane);
      });
      it('planes can take off from the airport', function(){
        plane.land(airport);
        plane.takeoff(airport);
        expect(airport.planes()).not.toContain(plane);

    });
  });
    describe('stormy condition prevent from landing and take off', function(){

        it('prevents the plane from take off when stormy', function(){
          plane.land(airport);
          spyOn(Math, 'random').and.returnValue(0);
          expect(function(){plane.takeoff(airport);}).toThrowError('it is too stomy to take off');
          expect(airport.planes()).toContain(plane);
        });
        it('prevents the plane from landing when stormy', function(){
          plane.takeoff(airport);
          spyOn(Math, 'random').and.returnValue(0);
          expect(function(){plane.land(airport);}).toThrowError('it is too stomy to land');
          expect(airport.planes()).not.toContain(plane);

      });
    });
});
