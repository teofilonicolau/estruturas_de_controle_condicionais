/**1 - Verifique se um número é positivo, 
 * negativo ou zero
Escreva um programa que leia um número e use uma 
estrutura if para verificar se o número é positivo, negativo ou zero. Imprima uma
mensagem apropriada para cada caso. */

const prompt = require('prompt-sync')();

let number = Number(prompt('Digite um numero : '));

if(number > 0) {
    console.log('O numero é positivo');
} else if (number < 0) {
    console.log('numero  é positivo');
} else {
    console.log('O numero é zero')
}