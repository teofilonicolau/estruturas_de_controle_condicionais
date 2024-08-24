/**Exercícios combinados
9 - Verifique a faixa etária de uma pessoa
Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
            Criança: 0 - 12 anos
            Adolescente: 13 - 17 anos
            Adulto: 18 - 59 anos
            Idoso: 60 anos ou mais

Dica: Utilize uma estrutura switch além bloco if/else para imprimir uma mensagem específica para cada faixa etária. */

const prompt = require('prompt-sync')();

let idade = Number(prompt('Digite a idade da pessoa: '));
let faixaEtaria;

if(idade >= 0 && idade <= 12) {
    faixaEtaria = 'Criança';
} else if (idade >= 13 && idade <= 17) {
    faixaEtaria = 'Adolescente';
} else if (idade >= 18 && idade <= 59) {
    faixaEtaria = 'Adulto';    
} else if (idade >= 60) {
    faixaEtaria = 'Idoso';
} else {
    console.log('Idade invalida! Por favor, insira um valor positivo');
    faixaEtaria = null;
}

if(faixaEtaria !== null) {
    switch(faixaEtaria) {
        case 'Criança':
            console.log('Você esta na faixa etaria de Criança. Aproveite!');
            break;
        case 'Adolescente':
            console.log('Você esta na faixa etaria de Adolescente. É uma fase de descobertas.');
            break;
        case 'Adulto':
            console.log('Você esta na faixa etaria de Adulto. Tempo de construir sua vida.');
            break;
        case 'Idoso':
            console.log('Você esta na faixa etaria de Idoso. Aproveite essa fase com sabedoria.');
            break;
        default:
            console.log('Erro ao determinar a faixa etaria.');
    }
}
