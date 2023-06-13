console.log(); //.log

console.log(Math.ceil(6.1)); //irá arredondar pra cima
console.log(Math.floor(6.1)); //irá arredondar pra baixo

//obs:
const obj1 = {};
obj1.nome = 'bola'; //jeito 1
obj1['nome'] = 'bola2'; //jeito 2  de acessar e/ou atributos de um obj


function Obj(nome){
    this.nome = nome;
}

const obj2 = new Obj('Nome aqui');
const obj3 = new Obj('nome 2 aqui');
console.log(obj2,obj3 );