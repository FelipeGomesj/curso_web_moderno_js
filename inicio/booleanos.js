let isAtivo = false;
console.log(isAtivo);
isAtivo = true;
console.log(isAtivo);

//bool com números: 0 false, 1 true, igual condução de energia, 0 sem energia e 1 com energia
isAtivo = 0;

console.log(!!isAtivo); // o sinal "!"  é a negação do valor, logo, se  usarmos "!!"" ele irá voltar para o seu estado verdadeiro

//testando com valores literal como true e false para entender essa lógica
//ou seja, quantidades ímpares de "!" sempre irão negar o verdadeiro valor e quantidade pares sempre irá trazer o valor verdadeiro
console.log(!!!!!true);


//condição tenária do js???
let nome = '';
console.log(nome || 'Sem nome');

//valores verdadeiros exeemplos:
//https://www.udemy.com/course/curso-web/learn/lecture/8778036#overview