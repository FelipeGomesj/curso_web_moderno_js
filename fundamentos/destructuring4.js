//https://www.udemy.com/course/curso-web/learn/lecture/8778088#overview
//mesmo exemplo da aula destructuring 3, porém agora com arrays

function random([min = 1, max = 1000]){
    if(min > max) [min, max] = [max, min]; //invertendo valores de variáveis caso o parâmetro passado para o min seja maior que o max
    const valorAleatorio = Math.random() * (max - min) + min;
    return Math.ceil(valorAleatorio);
}

//perceba eu estou passando uma lista  e atribuindo os valores quando eu chamo a funcao random
//repare que nao utilizo o  nome e sim respeito os parâmetros solicitados que neste caso é uma lista com 2 valores pelo menos.
console.log(random([1,10]));

//criando lista epassando ela:

const lista = [minxxx = 1, maxaa = 10];

console.log(random(lista));