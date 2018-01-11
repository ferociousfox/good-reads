import { getResponse } from './../js/hero.js';

$(document).ready(function(){
  $("#hero-form").submit(function(event){
    event.preventDefault();
    const heroInput = $('#user-input').val();

    let userArray = [];
    getResponse(callback, heroInput);
    });
    function callback(userArray){
      let heroPic = userArray[1];
      $("#name").text(userArray[0]);
      $("#pic").css(`background-image`, `url(${heroPic})`);
      $("#pic").css("background-repeat", "no-repeat");
      $("#pic").css("background-size", "contain");
      $("#pic").css("background-position", "center");
      $("#description").text(userArray[2]);
      $("#comic-count").text(userArray[3]);



    }
  });
