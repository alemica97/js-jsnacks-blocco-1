//----------------------------Snack-2--------------------------

//dichiaro un array vuoto dove salvo le parole
const wordsArray = [];
console.log(wordsArray);

while( wordsArray.length < 2){

    const word = prompt('Inserisci una parola');
    wordsArray.push(word);

}

//salvo le due parole in due variabili usando il destructuring dell'Array

const [wordOne, wordTwo] = wordsArray;
console.log(wordOne,wordTwo);

if(wordOne.length < wordTwo.length){
    console.log(`${wordOne} < ${wordTwo}`);
}else if(wordOne.length > wordTwo.length){
    console.log(`${wordTwo} < ${wordOne}`);
}