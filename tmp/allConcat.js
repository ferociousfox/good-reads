import { makeHaiku, singleSyll } from './../js/haiku.js';

$(document).ready(function(){
  alert("document ready");
  console.log('test');
  console.log(singleSyll);
  let whatIsBeingReturned = makeHaiku(singleSyll);
  console.log(whatIsBeingReturned);
  $('#haiku').append(whatIsBeingReturned);
});
