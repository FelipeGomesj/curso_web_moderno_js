//objeto em js pode ser criado vazio  e passar os seus valores de forma dinâmica:
const produto = {};
produto.nome = 'Celular';
produto.valor = 700;
produto.modelo = 'IPHONE 14 PRO MAX'
console.log(produto);

//Passando o valor na criaçao do objeto:

const produto2 = {
    nome: 'Camiseta Polo',
    valor: 79.90,

}
//objeto dentro de objeto:

const produto3 = {
    nome: 'nome',
    obj: {
        nome: 'nomeDoObj',
        valor: 78,
        objDntrodoObj: {
            nome: 'objeto dentro do objeto'
        }
    }
}
console.log(produto3.obj.objDntrodoObj.nome);
//exemplo JSON
'{"nome": "Camiseta Polo", "valor": 79.80}'