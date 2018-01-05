(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Age = exports.Age = function () {
  function Age(age) {
    _classCallCheck(this, Age);

    this.age = age;
    this.birthDate = birthDate; //format YYYYMMDD !important
    var earthYear = 365;
    this.earthAge = this.age * earthYear;
    this.mercuryYear = earthYear * 0.24;
    this.venusYear = earthYear * 0.62;
    this.marsYear = earthYear * 1.88;
    this.jupiterYear = earthYear * 11.86;
  }

  _createClass(Age, [{
    key: "getSecondsByYears",
    value: function getSecondsByYears() {
      return this.age * 31557600;
    }
  }, {
    key: "calcMercury",
    value: function calcMercury() {
      return this.earthAge / this.mercuryYear;
    }
  }, {
    key: "calcVenus",
    value: function calcVenus() {
      return this.earthAge / this.venusYear;
    }
  }, {
    key: "calcMars",
    value: function calcMars() {
      return this.earthAge / this.marsYear;
    }
  }, {
    key: "calcJupiter",
    value: function calcJupiter() {
      return this.earthAge / this.jupiterYear;
    }
  }, {
    key: "calcDifference",
    value: function calcDifference() {
      var yearsAgo = moment(this.birthDate, "YYYYMMDD").fromNow();
      return getSecondsbyYears(yearsAgo);
    }
  }]);

  return Age;
}();
//YEARS LEFT

// calcYearsLeft() {
//
// }

},{}],2:[function(require,module,exports){
'use strict';

var _age = require('../js/age.js');

//debug import. cannot read functions.

$(document).ready(function () {

  $('#time').text(moment());

  $('#age-form').submit(function (event) {
    event.preventDefault();
    var userAge = $('#age').val();
    var age = new _age.Age(userAge);
    $('#solution').append(age.getSecondsByYears());
  });
});

},{"../js/age.js":1}]},{},[2]);
