let contador = 1;
while(contador <= 10){
   console.log(`while: ${contador}`);
   contador++;
}

console.log("*=*=*=*=*");
for(let i = 1; i <= 10; i++){
    console.log(`for: ${i}`);
}

console.log("*=*=*=*=**=*=*=*=**=*=*=*=*");

let lista = [10, 15, 20, 25,30, 10, 158];

for(let i = 0; i < lista.length; i++){
    console.log(`valor lista: ${lista[i]}, index: ${i}`);
}