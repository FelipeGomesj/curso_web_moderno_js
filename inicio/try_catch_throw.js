//forçando o erro para o tratamento
function tratarErrorELancar(erro){
    //throw new Error('...');
    //throw 'erro?';
    throw{ 
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }

}
function imprimirNomeGritando(nome){
    try{
        console.log(nome.name.toUpperCase()+ "!!!!!!!"); 
    }catch(e){
        tratarErrorELancar(e);
    } finally{
        console.log('finalmente passou aqui'); //o bloco finally sempre será executado  independente se tiver erro ou não
    }
    
}

//trocar o name para outro nome para forçar o erro
const obj = {name: 'Feelipe'};
imprimirNomeGritando(obj);
