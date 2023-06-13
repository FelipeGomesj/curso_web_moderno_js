//Testando operadores lógicos:

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTv32 = !!(trabalho1 ^ trabalho 2) //bitwise xor é o mesmo que usar '!='
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavl = !comprarSorvete //operador unário, negação
    
    //retornando um objeto, isso é o mesmo que retornar um mapa, com nome e valor, no caso do js
    //se passarmos apenas as variáveis ele irá assumir o nome das variaveis como o título e o valor delas como valores, exemplo:
    //comprarSorvete: true, comprarTv50: false, e assim sucessivamente.
    return {
        comprarSorvete, comprarTv50, comprarTv32, manterSaudavl
    }
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false,false));