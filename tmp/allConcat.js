import { Age } from './../js/age.js';

$(document).ready(function(){
  $('#time').text(moment());

  $('#age-form').submit(function(event){
    event.preventDefault();
    let userAge = $('#age').val();
    let age = new Age(userAge);
    $('#solution-area').removeClass('hidden');
    $('#answers').append('you are: ' + age.getSecondsByYears() + ' second(s) old.' + '<br>')
    $('#answers').append('On Mercury you are: ' + age.calcMercury() + ' year(s) old.' + '<br>')
  });
});
