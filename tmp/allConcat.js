import { makeHaiku, singleSyll } from './../js/haiku.js';

$(document).ready(function(){
  console.log('test');
  console.log(singleSyll);
  let whatIsBeingReturned = makeHaiku(singleSyll);
  console.log(whatIsBeingReturned);
  $('#haiku').append(whatIsBeingReturned);
});
