function obterInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min; // o Math.random gera um valor entre 0,0 e 1,0, multiplicando pelo range de intervalo passado e subtraindo pelo menor interrvalo conseguimos controlar um valor minimo e máximo para obter um range de intervalo personalizado
    return Math.round(valor);

}

let opcao = 0;
let loop = 1;
while(opcao != -1){
    opcao = obterInteiroAleatorio(-1, 10);
    console.log(`O valor sorteado do loop ${loop} foi ${opcao}`);
    loop += 1;
}
console.log('FIM.');
 