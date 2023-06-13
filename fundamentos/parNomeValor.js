const saudacao = 'Opa'; //contexto léxico 1, ou seja, saudacao definido dentro do arquivo: parNomValor.js

function funcao(){
    const saudacao = 'falaa'; // contexto léxico 1, ou seja, saudacao declarada dentro da function funcao que está dentro do arquivo parNomeValor.js
    return saudacao;
}

console.log(saudacao);
console.log(funcao());

//Objetos são grupos aninhados de pares nome e valor:

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90.5,
    endereco: {
        logradouro: 'Rua Muito legal',
        numero: 123
    }
}

console.log(cliente);