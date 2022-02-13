//--------------------------------Snack-9----------------------------

const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

let i = 0;
let somma = 0;
let media = 0;

do{
    somma = somma + numbers[i];

    i++;
}while( i < numbers.length);

console.log(`la somma è: ${somma}`);

media = somma / numbers.length;
console.log(`la media è: ${media}`);