export class Age {
  constructor(age){
    this.age = age;

    const earthYear = 365;
    this.earthAge = this.age * earthYear;
    this.mercuryYear = earthYear * 0.24;
    this.venusYear = earthYear * 0.62;
    this.marsYear = earthYear * 1.88;
    this.jupiterYear = earthYear * 11.86;
  }

//PLANETS

  // let age = this.age;

  getSecondsByYears(){
    return this.age * 31557600;
  }

  calcMercury() {
    return this.earthAge / this.mercuryYear;
  }

  calcVenus() {
    return this.earthAge / this.venusYear;
  }

  calcMars() {
    return this.earthAge / this.marsYear;
  }

  calcJupiter() {
    return this.earthAge / this.jupiterYear;
  }
}

//DATE DIFFERENCE

  // calcDate(birthDate) {
  //   let birthDate = birthDate;
  //   let time = time;
  //
  // }

//YEARS LEFT
