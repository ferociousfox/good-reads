const apiKey = require('./../.env').apiKey;
const apiPriv = require('./../.env').apiPriv;
var md5 = require('md5');
export class ApiCall {
  constructor() {
    this.name = name;
  }
}
 export function getResponse(callback) {
    let ts = new Date().getTime();
    console.log(ts);
    var hash = md5(ts + apiPriv + apiKey).toString();
    console.log(hash);
    const userArray = [];
    let url = `https://gateway.marvel.com:443/v1/public/characters?name=hulk`;
    $.getJSON(url, {
      ts: ts,
      apikey: apiKey,
      hash: hash,
    })
    .done(function(response) {
      var results = response.data.results;
      const pic = results[0].thumbnail.path + "." + results[0].thumbnail.extension;
      userArray.push(results[0].name, results[0].description, pic, results[0].comics.available);
    })
    .fail(function(response){
          // the error codes are listed on the dev site
          console.log(err);
  });
  callback(userArray);
}
