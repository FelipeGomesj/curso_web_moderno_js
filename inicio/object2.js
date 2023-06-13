console.log(typeof Object); // function
console.log(typeof new Object()); //object, pois estamos instanciando(chamando o construtor para passar os parâmetros daquele obj)

const Cliente = function(){};
console.log(typeof Cliente); //function
console.log(typeof new Cliente); //object

class Produto{} // PADRÃO: ECMA SCRIPT(JS) 2015 (ES6)
console.log(typeof Produto); //function

console.log(typeof new Produto()) // object;
