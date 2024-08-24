/**Exercícios com switch

6 - Verifique o dia da semana
Escreva um programa que leia um número de 1 a 7 
e use uma estrutura switch para imprimir o 
dia da semana correspondente. (1 =
Domingo, 2 = Segunda-feira, etc.) */

const prompt = require('prompt-sync')();

let dia = Number(prompt('Digite o numero do dia de 1 a 7  : '));

switch(dia) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-feira');
        break;
    case 3:
        console.log('Terça-feira');
        break;
    case 4:
        console.log('Quarta-feira');
        break;
    case 5:
        console.log('Quinta-feira');
        break;
    case 6:
        console.log('Sexta-feira');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Número inválido, pot favor digite um número entre 1 e 7.')    

                               
}
