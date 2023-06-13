//método de concatenação sem usar o template String:
const nome = "Rebeca";
const concatenacao = "Olá, " + nome + "!";
console.log(concatenacao);
//usando o template String:
const templat = `Olá, ${nome}!`; //obs eu poderia quebrar esse template no meio e ele iria considerar um linha qubrada
console.log(templat);

//expressoes
console.log(`1 + 1 = ${1 + 1}`);

//posso chamar funções dentro do `${}`:

//arrow function: 
const upperCaseFunction = texto => texto.toUpperCase();
console.log(`${upperCaseFunction("texto aqui...")}`);
//obs: ambos os métodos geram os mesmos resultados.
