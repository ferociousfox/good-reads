const apiKey = require('./../.env').apiKey;
const apiPriv = require('./../.env').apiPriv;
var md5 = require('md5');
export class ApiCall {
  constructor() {
    this.name = name;
  }
}
 export function getResponse(callback, input) {
   const heroInput = input;
    let ts = new Date().getTime();
    console.log(ts);
    var hash = md5(ts + apiPriv + apiKey).toString();
    console.log(hash);
    const userArray = [];
    let url = `https://gateway.marvel.com:443/v1/public/characters?name=${heroInput}`;
    $.getJSON(url, {
      ts: ts,
      apikey: apiKey,
      hash: hash,
    })
    .done(function(response) {
      var results = response.data.results;
      console.log(results);
      const pic = results[0].thumbnail.path + "." + results[0].thumbnail.extension;
      userArray.push(results[0].name, pic, results[0].description, results[0].comics.available);
      callback(userArray);
    })
    .fail(function(response){
          // the error codes are listed on the dev site
          console.log(err);
  });
}
