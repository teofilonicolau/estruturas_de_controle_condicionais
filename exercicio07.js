/**7 - Calcule o valor de uma expressão matemática simples

Escreva um programa que leia dois números e um operador 
(+, -, *, /) e use uma estrutura switch para calcular o resultado da operação.
Imprima o resultado.
Dica: Utilize os operadores aritméticos em cada caso do switch. */

const prompt = require('prompt-sync')();

let num1 = Number(prompt('Digite o primeiro número  : '));
let num2 = Number(prompt('Digite o segundo número  : '));
let operador = prompt('Digite o operador(+, -, *, /)  : ');

let resultado;

switch (operador) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        if(num2 !== 0) {
            resultado = num1 / num2;
        }else {
            console.log('Erro: divisão por zero não é permitida');
            resultado = null;
        } 
        break;
    default:
        console.log('Operador inválido por favor,ultilize : +,-,* ou /.');              
}

if (resultado !== null) {
    console.log(`O resultado de ${num1} ${operador} ${num2} é : ${resultado}`)
}