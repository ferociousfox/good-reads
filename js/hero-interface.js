import { getResponse } from './../js/hero.js';

$(document).ready(function(){
  $("#click").click(function(event){
    event.preventDefault();
    getResponse(callback);

    });
    function callback(input){
      console.log(input);
      $("#results").append(input)
    }
  });
