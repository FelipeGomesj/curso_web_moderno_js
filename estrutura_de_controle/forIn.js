//exemplo com lista:
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for(let i in notas){
    console.log(`${i}: ${notas[i]}`);
}
//essa maneira acima é a mesma dessa:

/**
 * let lista = [10, 15, 20, 25,30, 10, 158];

for(let i = 0; i < lista.length; i++){
    console.log(`valor lista: ${lista[i]}, index: ${i}`);
}
 */

//exemplo com objeto:

const pessoa = {
    nome: 'Ana',
    sobrenome:'Silva',
    idade: 24,
    peso: 64
}
console.log('*=*=*=*=*=*=*=*=*')
for(let atributo in pessoa){       
    console.log(`${atributo}: ${pessoa[atributo]}`); 
}
