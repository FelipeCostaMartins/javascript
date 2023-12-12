//DESAFIO 3

//Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semetre da faculdade calcule e imprima a sua MÉDIA e a sua classificação conforme a tabela abaixo.

//média menor que 5, reprovação;
//média entre 5 e 7, recuperação;
//média acima de 7, aprovação;

const NotaPortugues = 5;
const NotaMatematica = 10;
const NotaHistoria = 7;

const media = (NotaPortugues + NotaMatematica + NotaHistoria) / 3;

console.log('Sua média é', media.toFixed(1))

if (media < 5) {
   console.log('Você foi reprovado!')
} else if (media >= 5 && media <= 7) {
   console.log('Você está de recuperação!')
} else {
   console.log('Parabés! Você foi aprovado!')
}
