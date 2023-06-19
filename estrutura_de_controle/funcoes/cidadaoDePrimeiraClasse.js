//função em js é opcional, ou você chama o return e a função retorna algo, ou não chama e a função fica do tipo "void"
function func(){} //função literal

//armazenando  função em uma variável ou const
const func2 = function(){};

//armazenar em um array:

const array = [ function(parametro1, parametro2){return parametro1 + parametro2}, func, func2 ];

//executando:
console.log(array[0](10, 5));

//armazenar em um atributo de objeto

const obj = {
    falar: function(fala) {return fala}
};

console.log(obj.falar('Oi'));


//passar função como parâmetro de uma função:
function correr(func){
    func(); //invocando a função
    func; //nao invocando
}

correr(function (){
    console.log('Passando função como parametro');
});

//uma função pode retornar/conter uma função

function soma(a,b){
    return function(c){
        console.log(a + b + c);
    }
}

soma(3,3)(5); // parametros da funcao soma (3,3) parametro do retorno da função soma(5)
