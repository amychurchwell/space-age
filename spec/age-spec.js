import { Age } from './../js/age.js';

describe('Age', function() {
  it('should take a person’s age in years and convert it into seconds', function(){
    let exampleYears = 2;
    let result = Age.getSecondsByYears(exampleYears);
    expect(result).toEqual(63113904);
  });

  it('should return the age of a human in mercury years', funtion(){
    let humanAge = 2
    let result = Age.calcMercury(humanAge);
    expect(result).toBeCloseTo(8.333, 0.1) //TODO: play with this for repeating result
  })

  it('should return the age of a human in venus years', funtion(){
    let humanAge = 2
    let result = Age.calcVenus(humanAge);
    expect(result).toEqual(3.22580645161);
  })

  it('should return the age of a human in mars years', funtion(){
    let humanAge = 2
    let result = Age.calcMars(humanAge);
    expect(result).toEqual(1.06382978723);
  })

  it('should return the age of a human in jupiter years', funtion(){
    let humanAge = 2
    let result = Age.calcJupiter(humanAge);
    expect(result).toEqual(0.16863406408);
  })
});
