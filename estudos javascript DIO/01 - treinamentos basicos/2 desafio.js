//DESAFIO 2

//Faça um programa para calcular o valor de uma viagem. Terá 5 variaveis: 1- Preço do Etanol; 2- Preço da Gasolina; 3- O tipo de combustível que está no seu carro; 4- Gasto médio de combustível do carro por KM; 5- Distância em KM da viagem; Imprima no console o valor que será gasto para realizar a viagem.

const CombustivelGastoPorKM = 12;
let DistanciaKM = 20; //<--- INSIRA AQUI A DISTÂNCIA EM KM PARA A SUA VIAGEM

const Etanol = DistanciaKM / CombustivelGastoPorKM * 3.64;
const Gasolina = DistanciaKM / CombustivelGastoPorKM * 5.59;
let MeuFuscaUsa = Etanol; //<-- INSIRA AQUI QUAL COMBUSTÍVEL VOCÊ IRÁ UTILIZAR

if (MeuFuscaUsa === Etanol) {
   console.log('Seu fusquinha gastará R$', Etanol.toFixed(2), 'de Etanol para realizar essa viagem');
} else {
   console.log('Seu fusquinha gastará R$', Gasolina.toFixed(2), 'de Gasolina para realizar essa viagem');
} 
