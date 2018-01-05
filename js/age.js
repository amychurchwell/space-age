export class Age {
  constructor(){
    this.age = age;
    this.earth = earthAge;
    this.mercury = mercuryAge;
    this.venus = venusAge;
    this.mars = marsAge;
    this.jupiter = jupiterAge;
  }

//PLANETS
  const earthYear = 365;
  const mercuryYear = earthYear * 0.24;
  const venusYear = earthYear * 0.62;
  const marsYear = earthYear * 1.88;
  const jupiterYear = earthYear * 11.86;

  function getSecondsByYears(age){
    let age = age;
    return age * 31557600;
  }

  function calcMercury(age) {
    let age = age;
    let earthAge = age * 365;
    return = earthAge / mercuryYear;
  }

  function calcVenus(age) {
    let age = age;
    let earthAge = age * 365;
    return earthAge / venusYear;
  }

  function calcMars(age) {
    let age = age;
    let earthAge = age * 365;
    return earthAge / marsYear;
  }

  function calcJupiter(age) {
    let age = age;
    let earthAge = age * 365;
    return earthAge / jupiterYear;
  }

//DATE DIFFERENCE


//YEARS LEFT
