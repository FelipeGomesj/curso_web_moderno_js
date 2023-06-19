function teste1(num){
    if(num > 7) //quando nao colocamos as chaves no if, ele irá executar a próxima sentença caso entree no if, pois, quando nao espeficiamos a chave ele entende que somente deve ser executado a próxima sentença
        console.log('Entrou no if', num) 
        console.log('Final')
}

console.log(teste1(7));
console.log(teste1(8));