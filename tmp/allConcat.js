import { Age } from './../js/age.js';

$(document).ready(function(){
  $('#time').text(moment());

  $('#age-form').submit(function(event){
    event.preventDefault();
    $('#answers').text('');
    let userAge = $('#age').val();
    let age = new Age(userAge);
    $('#solution-area').removeClass('hidden');
    $('#answers').append('you are: ' + age.getSecondsByYears() + ' second(s) old.' + '<br>')
    $('#answers').append('On Mercury you are: ' + age.calcMercury() + ' year(s) old.' + '<br>')
    $('#answers').append('On Venus you are: ' + age.calcVenus() + ' year(s) old.' + '<br>')
    $('#answers').append('On Mars you are: ' + age.calcMars() + ' year(s) old.' + '<br>')
    $('#answers').append('On Jupiter you are: ' + age.calcJupiter() + ' year(s) old.' + '<br>')
  });
});
