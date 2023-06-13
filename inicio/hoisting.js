//Hoisting: https://www.udemy.com/course/curso-web/learn/lecture/8778068#overview
console.log(a);
var a = 'a'; //comentar essa linha para entender,
console.log(a);

//com let o efeito é parecido com as outras linguagens:

/**
console.log(a);
let a = 'a'; //erro: let a ainda nao definida.
console.log(a);

 */