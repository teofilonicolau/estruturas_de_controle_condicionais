/**4 - Verifique se um número é par ou ímpar

Escreva um programa que leia um número e use uma estrutura 
 if/else para verificar se o número é par ou ímpar. Imprima uma mensagem apropriada. */

 const propmpt = require('prompt-sync')();

 let number = Number(propmpt('Digite um numero : '));

 if(number % 2 === 0) {
    console.log(`O mumero ${number} é um mumero par .`)
 } else {
    console.log(`O numero ${number} é um numero impar`)
 }