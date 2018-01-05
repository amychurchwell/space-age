import { Age } from './../js/age.js';

describe('Age', function() {
  let age;
  beforeEach(function(){
    age = new Age(2, 1980);
  });

  it('should take a person’s age in years and convert it into seconds', function(){
    let result = age.getSecondsByYears();
    expect(result).toEqual(63115200);
  });

  it('should return the age of a human in mercury years', function(){
    let result = age.calcMercury();
    expect(result).toBeCloseTo(8.333, 0.1) //TODO: play with this for repeating result
  });

  it('should return the age of a human in venus years', function(){
    let result = age.calcVenus();
    expect(result).toEqual(3.225806451612903);
  });

  it('should return the age of a human in mars years', function(){
    let result = age.calcMars();
    expect(result).toEqual(1.0638297872340428);
  });

  it('should return the age of a human in jupiter years', function(){
    let result = age.calcJupiter();
    expect(result).toEqual(0.16863406408094436);
  });

  it('should determine the difference in seconds between a user inputted date and the current time', function(){
    let result = age.calcDifference();
    expect(result).toEqual('test');
  });

  // it('should determine how many years a user has left to live on each planet', function(){
  //
  // });
});
