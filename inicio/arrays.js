const array =  [7.7, 8.9, 6.3, 9.2];
array[5] = 'adicionei'; //irá deixar o index 4 vazio e preencher o index 5 com 'adicionei' 
console.log(array[4]); //undefined
console.log(array.length);
//em dart para adicionar valores ao array seria o array.add(5), em js é push
array.push(15, {id: 1}, false, null, undefined, 'teste');
console.log(array);
//tirar o último valor do array (pop()):
array.pop();
console.log(array);

//tirar algum valor pelo index:
delete array[10];
console.log(array);
console.log(typeof array);