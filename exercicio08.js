/**8 - Verifique a estação do ano
Escreva um programa que leia um número de 1 a 4 e 
use uma estrutura switch para imprimir a estação do ano correspondente. (1 =
Primavera, 2 = Verão, 3 = Outono, 4 = Inverno) */

const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um numero de 1 a 4 para verificar as estações do ano  :  '));

let estação;

switch (numero) {
    case 1:
        estação = 'Primavera';
        break;
    case 2:
        estação = 'Verão';
        break;
    case 3:
        estação = 'Outono';
        break;
    case 4:
        estação = 'Inverno';
        break;
    default:
        console.log('Número invalido,por favor digite um numero entre 1 e 4');
        estação = null;                
}

if (estação !== null) {
    console.log(`A estação correspondente  ao numero ${numero}  é  : ${estação}`)
}
