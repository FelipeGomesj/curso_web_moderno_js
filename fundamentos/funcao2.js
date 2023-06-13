//Armazenando uma função dentro de uma variável

const imprimirSoma = function(a, b){
    console.log('imprimiSoma: ', a + b);
}
imprimirSoma(2,3);

//Armazenando uma função arrow(=>) em uma variável
const imprimirSoma2 = (a,b) => console.log('imprimirSoma2: ', a + b);
imprimirSoma2(10,2);

//Armazenando uma função arrow(=>) com {} em uma variávl
const imprimirSoma3 = (a,b) => {
    console.log('imprimirSoma3: ', a + b);
}
imprimirSoma3(10,10);

const imprimirSoma4 = (a,b) => {
    return a + b;
}
console.log('imprimirSoma4: ', imprimirSoma4(30,30));

//retorno ímplicito
const imprimirSoma5 = (a,b) => a + b;
console.log('imprimirSoma5: ', imprimirSoma5(50,50));

//retorno ímplicito com apenas 1 parâmeto;

const nomeUsuário = nome => console.log(`Olá, ${nome}. \nMuito bem-vindo(a).`);
nomeUsuário('Felipe');