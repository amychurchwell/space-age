export class Age {

  constructor(age){
    this.age = age;
    this.birthDate = birthDate; //format YYYYMMDD !important
    const earthYear = 365;
    this.earthAge = this.age * earthYear;
    this.mercuryYear = earthYear * 0.24;
    this.venusYear = earthYear * 0.62;
    this.marsYear = earthYear * 1.88;
    this.jupiterYear = earthYear * 11.86;
  }

//PLANETS

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

  calcDifference() {
    let yearsAgo = moment(this.birthDate, "YYYYMMDD").fromNow();
    return getSecondsbyYears(yearsAgo);
  }

//YEARS LEFT
