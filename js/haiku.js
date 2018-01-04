export const singleSyll =  ["A","All","And","Are","As","Be","By","Day","Did","Each","Few","For","Get","Have","He","Him","His","I","In","Is","It","Long","Man","Me","More","Much","My","New","Not","Now","Of","Off","Old","On","One","Or","Out","Same","She","So","Star","State","Than","That","The","They","Time","To","Up","War","Was"];
export function makeHaiku(wordsArr){
  let haikuMaker = [];
  for (let i = 0; i < 16; i++) {
    console.log(i);
    let randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    haikuMaker.push(randomWord);
  }
  haikuMaker.splice(12, 0, '<br>');
  haikuMaker.splice(5, 0, '<br>');
  haikuMaker = haikuMaker.join(" ");
  return haikuMaker
}
