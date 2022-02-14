const array = [];

for(let i = 0; i < 6; i++){
    const userNumber = parseFloat(prompt('Inserisci un numero:'));
    console.log(userNumber);

    if(userNumber % 2 === 1){
        array.push(userNumber);
    }else{

    }
}

console.log(array);