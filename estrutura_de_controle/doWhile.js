//do while em js, lembrando do do while entra primeiro no bloco de instrução, executa e depois verifica a condição, ou seja, se na primeira vez a condição for a verdadeira para sair ddo bloco, ele irá entrar, executar ee sair depois
function obterInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min; // o Math.random gera um valor entre 0,0 e 1,0, multiplicando pelo range de intervalo passado e subtraindo pelo menor interrvalo conseguimos controlar um valor minimo e máximo para obter um range de intervalo personalizado
    return Math.round(valor);

}

let opcao = 0;
let loop = -1;
do{
    opcao = obterInteiroAleatorio(-1, 10);
    console.log(`O valor sorteado do loop ${loop} foi ${opcao}`);
    loop += 1;
}while(opcao != -1)
console.log('FIM.');

/**
 * Fala galera! Tudo bom?

Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao, ou seja, fazendo assim:

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
 
let opcao //somente iniciada a variável, sem valor inicial!
 
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)
 
console.log('Até a próxima!')
Fazendo isso, garante que a estrutura vá rodar pelo menos uma vez.

Bons estudos!
 */
 