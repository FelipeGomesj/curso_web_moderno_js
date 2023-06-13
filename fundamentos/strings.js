const escola = "Cod3r";
console.log(escola.charAt(1));
console.log(escola.charCodeAt(3)); //irá printar 51, pois ele usa table ask de código e o 3 representa o número 51: dica essa tabela está presente nas teclas alt + algum numero, neste caso o alt + 51 é igual a 3    https://symbl.cc/pt/
console.log(escola.indexOf("d")); //irá mostrar o index da primeira letra d encontrada na sting
console.log(escola.substring(1)); //irá começar a String pelo index 1
console.log(escola.substring(0,3)); // irá começar do index 0 e ir até o
console.log("Escolinha ".concat(escola).concat("!!!1")); //pode ser concatenado com  "+" também
console.log('Aqui?');
console.log(escola.replace("3", "e")); // irá substituir o primeiro 3 na String  por e
console.log(escola.replace(/\d/, 'e')); // irá substituir todos os números pela letra E
console.log(escola.replace(/\w/g, 'e')); // substituir a string inteira por e
console.log('Ana,Maria,Pedro'.split(',')); // irá usar a ',' para separar a string e criar um array com cada separação