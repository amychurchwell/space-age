export class Age {
  constructor(){
    this.earth = earthAge;
    this.mercury = mercuryAge;
    this.venus =
    this.mars =
    this.jupiter =
  }

//DAYS
  const earthYear = 365;
  const mercuryYear = earthYear * 0.24;
  const venusYear = earthYear * 0.62;
  const marsYear = earthYear * 1.88;
  const jupiterYear = earthYear * 11.86;

  function getSecondsByYears(age){

  }

  function calcMercury(age) {
    let age = age;
    let earthAge = age * 365;

    return earthAge / mercuryYear;

  }

  function calcVenus(age) {
    
  }

  function calcMars(age) {

  }

  function calcJupiter(age) {

  }
