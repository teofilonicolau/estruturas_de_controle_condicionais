/**Exercícios com if/else

3 - Calcule a média de três números e determine o conceito

Escreva um programa que leia três notas de um aluno, calcule a 
média e use uma estrutura if/else para determinar o conceito 
(A, B, C, D, E, F) baseado na média. Imprima o conceito.

Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.
 */
const prompt =  require('prompt-sync')();

let nota1 = Number(prompt('Digite a primeira nota : '));
let nota2 = Number(prompt('Digite a segunda nota : '));
let nota3 = Number(prompt('Digite a terceira nota :'));


let media = (nota1 + nota2 + nota3) / 3;

let conceito;

if(media >= 9) {
    conceito =  'A';
} else if (media >= 8) {
    conceito = 'B';
} else if (media >= 7) {
    conceito = 'C';
} else if (media >= 6) {
    conceito = 'D';
} else if (media >= 5) {
    conceito = 'E';   
} else {
    conceito = 'F'
}

console.log(`A media do aluno é ${media.toFixed(1)} e o conceito foi ${conceito}`)
