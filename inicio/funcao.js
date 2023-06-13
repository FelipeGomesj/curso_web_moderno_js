//funcao sem retorno
function imprimirSoma(num1, num2){
    console.log(`${num1} + ${num2} = ${num1+num2}`);
}
imprimirSoma(10,10); //ok
//peculiaridades do js:
imprimirSoma(2); //passando apenas 1 parâmetro, irá tentar somar 2 com undefined(que é o 2° parâmetro) e o resultado irá dar NaN(Not a Number)
imprimirSoma(2,5,48,484,); //passar mais de 1 parâmetro irá ignorar a partir do terceiro parâmetro neste caso dessa func
imprimirSoma(); //undefined + undefined 

//função com retorno:
function soma(num1, num2 = 2){ //num2 = 2, caso nao passe um parâmetro para o num2 considerar o valor 2 para ele
    return num1 + num2;
}
 
let retornoSoma = soma(5); // passar o parâmetro para num2 para entender  a lógica de valor padrão caso parâmetro nao for preenchido
console.log(retornoSoma);