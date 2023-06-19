const imprimirResultado = function (nota) {
    switch (Math.round(nota)){
        case 10: //quando nao espeficamos o caso, eele entende que deve se ignorar e considerar o  próximo case, ou seja, se não específico o case o próximo  a se específicar irá valer para ambos
        case 9:
        case 8: //ou seja, se o aluno tirar 10 || 9 || || 8 irá entrar no Quadro de Honra
            console.log('Quadro de Honra');
            break; //O break é utilizado pq mesmo se ele entrou neste case ele irá sair tentando entrar nos outros abaixos, então, quando ele entra aqui  no break, ele sai do switch
    
        case 7: case 6:
            console.log('Aprovado');
            break;
        case 5:
            console.log('Recuperação');
            break;
        case 4: case 3:
            console.log('Reprovado');
            break;
        case 2: case 1: case 0:
            console.log('Péssimo, precisa de atenção!');
            break;
        default:
        console.log('valor inválido:', nota);    

    }
}
imprimirResultado(10.4);
imprimirResultado(10.5);
imprimirResultado(7.4);
imprimirResultado(7.5);
imprimirResultado(5);
imprimirResultado('DEZ');
imprimirResultado(0);