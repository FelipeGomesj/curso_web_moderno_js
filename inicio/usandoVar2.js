//https://www.udemy.com/course/curso-web/learn/lecture/8778054#overview
var numero = 1;
{
    var numero = 2;
    console.log('dentro:', numero);
}
console.log('fora:',numero);

//este mesmo exemplo nao acontece com let