let i = 0;
let x = 0;

while( i < 1000){
    i = Math.pow(2 , x);
    console.log(`2^${x} = ${i}`);

    x++;
}