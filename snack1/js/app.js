// -----------------------------Snack-1----------------------

//chiedo un numero all'utente
const firstNumber = parseFloat(prompt('Inserisci un numero'));
console.log('il primo numero è:', firstNumber);

//ne chiedo un altro
const secondNumber = parseFloat(prompt('Inseriscine un altro'));
console.log('il secondo numero è:', secondNumber);

//stampo in console il numero maggiore, e avverto l'utente se inserisce numeri uguali
if(firstNumber > secondNumber){
    console.log('il numero maggiore è:', firstNumber);
}else if(firstNumber < secondNumber){
    console.log('il numero maggiore è:', secondNumber);
}else{
    alert('Inserisci due numeri diversi, ricarica la pagina e riprova!');
}
