import { Age } from './age.js';
//debug import. cannot read functions.

$(document).ready(function(){
  $('#time').text(moment());

  $('#age-form').submit(function(event){
    event.preventDefault();
    let userAge = $('#age').val();
    let age = new Age(userAge);
    $('#solution').append(age.getSecondsByYears());

  });
});
