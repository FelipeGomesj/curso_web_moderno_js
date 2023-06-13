console.log(7/0); //infinity
console.log('10'/2); // 5 (O js tenta converer a string para num, convertendo, ele faz a operação)
console.log('3' + 2); // 32 string tem preferência já que o símbolo de + é para concatenar
console.log('3' - 2); // num tem preferência já que o - 2  é uma subtração 
console.log('Oi' * 2); //NaN "Not a Number"
console.log(0.1 + 0.7); // imprecisão 0.7999999 explicação: https://www.udemy.com/course/curso-web/learn/lecture/8778018#overview 2:50
//console.log(10.toString()) // error: Invalid or unexpected token
console.log(10.3515.toFixed(2)); // duas casas decimais apenas