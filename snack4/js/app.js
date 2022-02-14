//-------------------------------------Snack-4---------------------------

//creo un Array con la lista degli invitati
const gatsbyParty = [
    'Tom',
    'Nick',
    'Daisy',
    'Myrtle',
    'Jordan',
]
console.log(gatsbyParty);

//salvo il nome dell'utente in una variabile
const userName = prompt('Ciao, come ti chiami?').trim();
console.log(userName);

let correctName = false;

for(let i = 0; i < gatsbyParty.length; i++){
    if(gatsbyParty[i] === userName){
        alert(`Ei ${userName}, sei il benvenuto alla festa di Gatsby!!`);
        correctName = true;
        break;
    }else{

    }
}

if(correctName == false){
    alert(`Mi spiace ${userName} non sei invitato alla festa!!`);
}