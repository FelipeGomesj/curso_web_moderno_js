var numero = 1;
{
    let numero = 2;
    console.log('dentro let:', numero);
}
console.log('fora var:', numero);

// o let diferencia escopos tanto em funções ou nao: 
// ou seja, let numero = 1 é uma variável
//e dentro é outra..
/*
let numero = 1;
{
    let numero = 2;
    console.log('dentro let2:', numero);
}
console.log('fora var2:', numero);
*/