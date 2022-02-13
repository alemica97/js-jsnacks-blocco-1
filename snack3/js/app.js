//---------------------------------Snack-3---------------------------------

/*let somma = 0;

for(let i = 0; i < 5; i++){
    const number = parseFloat(prompt('Inserisci un numero:'));
    console.log(number);
    somma = somma + number;
}

console.log('la somma dei numeri inseriti è:', somma);  */

// ------------------------------------------------------------------------

let i = 0;
let somma = 0;

while ( i < 5 ){
    const number = parseFloat(prompt('Inserisci un numero:'));
    console.log(number);
    somma = somma + number;

    i++;
}

console.log('la somma dei numeri inseriti è:', somma);