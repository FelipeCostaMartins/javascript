// DESAFIO 1

//  Faça um programa para calcular o valor de uma viagem. Terá 3 variaveis: 1- Preço do combustível; 2- Gasto médio de combustível por KM rodado; 3- Distância em KM da viagem; Imprima no console o valor gasto de combustível da viagem.

//const PrecoCombustivel = 7.44;
//const GastoCombustivelKM = 12;
//let DistanciaKM = 20; //<--- INSIRA AQUI A DISTÂNCIA EM KM PARA A SUA VIAGEM

//console.log("O preço do combustível gasto em sua viagem será de: R$", DistânciaKM/GastoCombustívelKM*PreçoCombustível);

//-----------------------------------------------------------------

//DESAFIO 2

//Faça um programa para calcular o valor de uma viagem. Terá 5 variaveis: 1- Preço do Etanol; 2- Preço da Gasolina; 3- O tipo de combustível que está no seu carro; 4- Gasto médio de combustível do carro por KM; 5- Distância em KM da viagem; Imprima no console o valor que será gasto para realizar a viagem.

//const CombustivelGastoPorKM = 12;
//let DistanciaKM = 20; //<--- INSIRA AQUI A DISTÂNCIA EM KM PARA A SUA VIAGEM

//const Etanol = DistanciaKM / CombustivelGastoPorKM * 3.64;
//onst Gasolina = DistanciaKM / CombustivelGastoPorKM * 5.59;
//let MeuFuscaUsa = Etanol; //<-- INSIRA AQUI QUAL COMBUSTÍVEL VOCÊ IRÁ UTILIZAR

//if (MeuFuscaUsa === Etanol) {
//    console.log('Seu fusquinha gastará R$', Etanol.toFixed(2), 'de Etanol para realizar essa viagem');
//} else {
//    console.log('Seu fusquinha gastará R$', Gasolina.toFixed(2), 'de Gasolina para realizar essa viagem');
//} 

//-----------------------------------------------------------------

//DESAFIO 3

//Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semetre da faculdade calcule e imprima a sua MÉDIA e a sua classificação conforme a tabela abaixo.

//média menor que 5, reprovação;
//média entre 5 e 7, recuperação;
//média acima de 7, aprovação;

//const NotaPortugues = 5;
//const NotaMatematica = 10;
//const NotaHistoria = 7;

//const media = (NotaPortugues + NotaMatematica + NotaHistoria) / 3;

//console.log('Sua média é', media.toFixed(1))

//if (media < 5) {
//    console.log('Você foi reprovado!')
//} else if (media >= 5 && media <= 7) {
//    console.log('Você está de recuperação!')
//} else {
//    console.log('Parabés! Você foi aprovado!')
//}

//-----------------------------------------------------------------

//DESAFIO 4

//Formula do IMC: IMC = peso / (altura * altura)
//Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

//IMC em adultos Condição:
// -Abaixo de 18.5 Abaixo do peso;
// -Entre 18.5 e 25 Peso normal;
// -Entre 25 e 30 Acima do peso
// -Entre 30 e 40 obeso;
// -Acima de 40 Obesidade Grave;

//const PesoKG = 80
//const AlturaMetros = 1.69

//const imc = PesoKG / Math.pow(AlturaMetros, 2)

//console.log('Seu IMC é de:', imc.toFixed(2))

//if (imc < 18.5) {
//    console.log('Você está abaixo do peso!')
//} else if (imc >= 18.5 && imc < 25) {
//    console.log('Você está com o peso normal!')
//} else if (imc >= 25 && imc < 30) {
//    console.log('Você está acima do peso!')
//} else if (imc >= 30 && imc < 40) {
//    console.log('Você está obeso!')
//} else {
//    console.log('Você é a tais Carla!!!')
//}

//-----------------------------------------------------------------

//DESAFIO 4

// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// 1- À vista Débito, recebe 10% de desconto;
// 2- À vista no dinheiro ou no pix, recebe 15% de desconto;
// 3- Em duas vezes, preço normal de etiqueta sem juros;
// 4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%

//const Playstation5 = 4999.99
//const FormaPagamento = 4

//console.log('Valor base do Playstation 5: R$', Playstation5)

//if (FormaPagamento === 1) {
//    console.log('Seu produto comprado à vista no débito custará: R$', (Playstation5 - (Playstation5 * 10) / 100).toFixed(2))
//} else if (FormaPagamento === 2) {
//    console.log('Seu produto comprado à vista no dinheiro ou pix sairá por: R$', (Playstation5 - (Playstation5 * 15) / 100).toFixed(2))
//} else if (FormaPagamento === 3) {
//    console.log('Seu produto comprado em duas vezes custará: R$', Playstation5)
//} else {
//    console.log('Seu produto pago em parcelas sairá por: R$', (Playstation5 + (Playstation5 * 10) / 100).toFixed(2))
//}