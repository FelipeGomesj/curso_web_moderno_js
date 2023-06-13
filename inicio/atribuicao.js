const a = 7;
let b = 3;

b += a; // saída: 10, lógica: b = b + a;
console.log(b);

b -= 4; // saída: 6, lógica: b = b - 4;
console.log(b);

b *= 2; //saída: 12, lógica: b = b * 2;
console.log(b);

b /= 2; // saída: 6, lógica: b = b / 2;
console.log(b);

b %= 2 // saída: 0, lógica: b = b % 2;  lembrando que o "%" pega o restante da divisão de b % 2 que neste caso em específico seria 6 / 2 = 3, resto = 0, por isso a saída zero, se fosse um número  ímpar iria ter algum resto e não seria 0 o valor;
console.log(b);