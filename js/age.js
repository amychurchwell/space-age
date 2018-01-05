export class Age {

  constructor(age, birthDate){
    this.age = age;
    this.birthDate = birthDate; //format YYYYMMDD !important
    const earthYear = 365;
    this.earthAge = this.age * earthYear;
    this.mercuryYear = earthYear * 0.24;
    this.venusYear = earthYear * 0.62;
    this.marsYear = earthYear * 1.88;
    this.jupiterYear = earthYear * 11.86;
  }

  getSecondsByYears(years){
    let year = years || this.age;
    return year * 31557600;
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

  calcDifference() {
    let yearsAgo = moment(this.birthDate, "YYYYMMDD").diff(moment(),'y');
    return this.getSecondsByYears(yearsAgo);
  }

  // calcYearsLeft() {
  //   let yearsLeft =
  //   return yearsLeft - this.age;
  // }
};
