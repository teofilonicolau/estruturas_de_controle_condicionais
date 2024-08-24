/**Verifique a categoria de um nadador

Escreva um programa que leia a idade de um nadador e use uma estrutura 
if/else para determinar a categoria do nadador de acordo com a idade:
            Infantil A: 5 - 7 anos
            Infantil B: 8 - 10 anos
            Juvenil A: 11 - 13 anos
            Juvenil B: 14 - 17 anos
            Adulto: 18 anos ou mais */
const prompt = require('prompt-sync')();

let idade = Number(prompt('digite a idade do nadador  : '));

if(idade >= 5 && idade <= 7) {
    console.log('Categoria : Infantil A');    
} else if (idade >= 8 && idade <= 10) {
    console.log('Categoria  : Infantil B')
} else if (idade >= 11 &&  idade <= 13){
    console.log('Categoria : Juvenil A');
} else if (idade >= 14 && idade <= 17) {
    console.log('Categoria Juvenil B');
} else if (idade >= 18) {
    console.log('Categoria : Adulto')
} else {
    console.log('Idade inválida para as categorias especificadas')
}