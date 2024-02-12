// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"


const { gets, print } = require('./funcoes-auxiliares-ex1');

const joaozinho = [
    10,
    8,
    7,
    6
]

print(gets(joaozinho))