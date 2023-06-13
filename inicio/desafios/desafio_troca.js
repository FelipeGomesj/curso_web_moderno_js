//trocar valores de variáveis, exemplo, uma variável a = 7
//e variável b = 94,  fazer com que a variável a passe a ser 94 e a variável b 7

let a = 7;
let b = 94;
let cTemporario = 0;
console.log("a: ", a,"\nb: ", b);
cTemporario = a;
a = b;
b = cTemporario;
console.log('valores trocados:\na: ', a, "\nb: ", b);

//outra forma de se fazer que o JS disponibiliza:
let a2 = 7;
let b2 = 94;
console.log("outra forma de se fazer que o JS disponibiliza: ");
console.log("a2: ", a2, "\nb2: ", b2);
[a2, b2] = [b2, a2]; 
console.log('valores trocados 2: ', "\na2: ", a2, "\nb2: ", b2);

