'use strict';
describe('Aiport', function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Aiport();
    plane = jasmine.createSpy('plane');
  });
    it('has no planes by default', function(){
      expect(airport.planes()).toEqual([]);
    });
    it('clears the planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
    it('cleaes for takeoff the plane', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).toEqual([]);
    });
    it('has isStormy function', function(){
      expect(airport.isStormy()).toBeFalsy();
    });
    describe('under stormy condition', function(){
      it('does not clear planes to take of if stormy', function(){
        spyOn(airport,'isStormy').and.returnValue(true);
        expect(function(){airport.clearForTakeoff(plane);}).toThrowError('it is too stomy to take off');
      });
      it('does not clear planes to land if stormy', function(){
        spyOn(airport,'isStormy').and.returnValue(true);
        expect(function(){airport.clearForLanding(plane);}).toThrowError('it is too stomy to land');
      });
    });
});
