function soBoaNota(nota){
    if(nota >= 7){
        console.log('aprovado com ' + nota);
    }
}

soBoaNota(8.1);
soBoaNota(6.1);

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É TRUE', valor);
    }else{
        console.log('É FALSE:', valor);
    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);