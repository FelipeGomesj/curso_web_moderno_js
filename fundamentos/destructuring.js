//recurso do ES2015
//serve para extrair dados de um Map/Objeto  lista:
// lembrando que poderíamos acessar com o "." também


const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua abc',
        numero: 123
    }
}

//operador destructuring: 
const {nome, idade} = pessoa; // irá pegar o nome e idade de pessoa e armazená-los  em constantes nome e idade
console.log(nome,idade);

const {nome: name, idade: age} = pessoa; // irá pegar os valores de nome de pssoa  e idade de pessoa e armazená-los em constantes de name  e age

console.log(name, age);

//operador destructuring acessando atributo inexistentee e atributo inexistente com o valor padrão:

const {sobrenome, bemHumorado = true} = pessoa;
console.log(sobrenome, bemHumorado);

//acessando objeto de objeto com Destructuring e atributo que nao existe

const {endereco: {logradouro, numero, cep}} = pessoa; // irá criar logradouro, numero e cep com os valores respectivos do obj pessoa

console.log(logradouro);

//console.log(pessoa.endereco.numero);

//const {conta: {ag, num}} = pessoa; //erro