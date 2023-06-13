//basicamente var ela pode ser definada 2x com o mesmo nome
//e fica visível  globalmente criada dentro de um bloco
// a não ser que o bloco nao seja de uma função...
{
    {
        {
            {
                var sera = 'Será????';
            }
        }
    }
}
console.log(sera);

//este exemplo conmfirma: // a não ser que o bloco nao seja de uma função, if, for etc..
function testeVar(){
    var local = 123;
}
testeVar();
console.log(local);