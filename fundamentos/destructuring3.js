//https://www.udemy.com/course/curso-web/learn/lecture/8778086#overview
/**A sintaxe do operador destructuring quando usado em função no JS é muito parecido quando vamos passar parâmetro nomeados em dart,  usa o msmo tipo de sintaxe,
 * objetivo parecido, poréem com uma diferença, o js entende que quando passamos os parâmetros de uma função em "{}" no caso, este parâmetro é um objeto e no dart
 * não funciona assim.
 * 
*/
//solicitando um OBJETO "{}" que possua  2 atributos com numeros e caso nao passe esse objeto irá considera valor min de 1 e valor max de 1000
function random({min = 1, max = 1000}){
    const valorAleatorio = Math.random() * (max - min) + min;
    return Math.ceil(valorAleatorio);
}

//quando eu mudo o nome ele desconsidera os valores que eu passei e passa a considerar o valor padrão de 1 e 1000
//perceba que aqui ele não irá rspeitar o range de 40 e 50 ja que o nome min e max nao está presente no parâmetro
console.log(random({minimo: 40, maximo: 50}));

//mesmo exemplo só que passando o objeto já criado com os nomes solicitados no parâmetro de random
//lembrando que ele solicita um objeto que tenha atributos de min e max, mas não necessariamente são parametros nomeados igual é no dart:

const obj = {
    min: 15,
    max: 30
}

console.log(random(obj));