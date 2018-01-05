export const singleSyll =  ['Sad','LOSER','MAGA','Chyna','Yuge','The likes of which','Record crowds','Unpresidented','Not a looker','Fake News','I Guarantee it', 'The Failing New York Times', 'Little Rocketman', 'on both sides', 'Melania', 'Tremendous', 'trust me', '...', 'Golf', 'Crooked Hillary', 'Lock her up', 'God blesh the united shtatshh', 'Get em outta here', 'by any means'];

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
