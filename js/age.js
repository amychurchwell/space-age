export class Age {
  constructor(age, earthAge, mercuryAge, venusAge, marsAge, jupiterAge){
    this.age = age;
    this.earth = earthAge;
    this.mercury = mercuryAge;
    this.venus = venusAge;
    this.mars = marsAge;
    this.jupiter = jupiterAge;

    this.earthYear = 365;
    this.earthAge = this.age * earthYear;
    this.mercuryYear = earthYear * 0.24;
    this.venusYear = earthYear * 0.62;
    this.marsYear = earthYear * 1.88;
    this.jupiterYear = earthYear * 11.86;
  }

//PLANETS

  // let age = this.age;



  getSecondsByYears(age){
    return age * 31557600;
  }

  calcMercury(earthAge) {
    return earthAge / this.mercuryYear;
  }

  calcVenus(earthAge) {
    return earthAge / this.venusYear;
  }

  calcMars(earthAge) {
    return earthAge / this.marsYear;
  }

  calcJupiter(earthAge) {
    return earthAge / this.jupiterYear;
  }
}

//DATE DIFFERENCE

  // calcDate(birthDate) {
  //   let birthDate = birthDate;
  //   let time = time;
  //
  // }

//YEARS LEFT
