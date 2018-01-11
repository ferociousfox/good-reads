import { getResponse } from './../js/hero.js';

$(document).ready(function(){
  $("#hero-form").click(function(event){
    event.preventDefault();
    const heroInput = $('#user-input').val();

    let userArray = [];
    getResponse(callback, heroInput);
    });
    function callback(userArray){
      userArray.forEach(function(item) {
      $("#results").append("<li>" + item + "</li>");
    });
  }
});
