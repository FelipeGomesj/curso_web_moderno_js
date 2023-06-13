//resultado: nome const| nota: nome do Parametro
const resultado = nota => nota >=  7 && nota < 10 ? 'Aprovado' : nota == 10 ? 'Excelente' : nota <= 3 ? 'Precisa melhorar' : 'Reprovado'; // segue a mesma lógica que no dart, porém, aqui só usamos uma interrogação (?) e já no dart, senão me engano são duas interrogações (??)
console.log(resultado(4));

//essa função acima é equivalente a essa:

/**
 * const resultado = nota => {
 * return  nota >=  7 && nota < 10 ? 'Aprovado' : nota == 10 ? 'Excelente' : nota <= 3 ? 'Precisa melhorar' : 'Reprovado';
 * }
 */