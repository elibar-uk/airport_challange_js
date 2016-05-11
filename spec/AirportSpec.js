// 'use strict';
describe('Airport', function(){

  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
  });

    it('has no planes by default', function(){
      expect(airport.planes()).toEqual([]);
    });
  describe('under calm weather', function(){
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(3);
    });

    it('clears the planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('cleaes for takeoff the plane', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
});
    describe('under stormy condition', function(){
      beforeEach(function(){
        spyOn(Math, 'random').and.returnValue(0);
      });
      it('does not clear planes to take of if stormy', function(){
        // spyOn(weather, 'isStormy').and.returnValue(true);
        expect(function(){airport.clearForTakeOff(plane);}).toThrowError('it is too stomy to take off');
      });

      it('does not clear planes to land if stormy', function(){
        // spyOn(weather, 'isStormy').and.returnValue(true);
        expect(function(){airport.clearForLanding(plane);}).toThrowError('it is too stomy to land');
      });
    });
});
