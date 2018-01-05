import { Age } from './../js/age.js';

$(document).ready(function(){
  $('#time').text(moment());
  $('#age-form').submit(function(event){
    event.preventDefault();

    let age = $('#age').val();
    $('#solution').append(getSecondsByYears(age));
  });
});
