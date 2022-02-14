//----------------------Snack-8------------------------------

const userNumber = [...prompt('Inserisci un numero di 4 cifre:')];
console.log(userNumber);

let somma = 0;
let i = 0;

if( userNumber.length === 4){
    while( i < userNumber.length){
        userNumber[i] = parseInt(userNumber[i]);
        console.log(userNumber[i]);
    
        somma = somma + userNumber[i];
        i++;
    }
}else{
    alert('Il numero deve essere di 4 cifre!')
}


// for(let i = 0; i < userNumber.length; i++){
//     userNumber[i] = parseInt(userNumber[i]);
//     console.log(userNumber[i]);

//     somma = somma + userNumber[i];
    

// }

console.log(`la somma è: ${somma}`);