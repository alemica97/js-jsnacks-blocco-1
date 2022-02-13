const number = parseInt(prompt('Inserisci un numero:'));
console.log('Hai inserito:',number);

let cubo = 0;
let i = 1;

while( i <= number){
    cubo = Math.pow(i, 3);
    console.log(`il cubo di ${i} è: ${cubo}`);

    i++;
}