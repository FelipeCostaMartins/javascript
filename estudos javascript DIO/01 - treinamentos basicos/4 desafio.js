//DESAFIO 4

//Formula do IMC: IMC = peso / (altura * altura)
//Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

//IMC em adultos Condição:
// -Abaixo de 18.5 Abaixo do peso;
// -Entre 18.5 e 25 Peso normal;
// -Entre 25 e 30 Acima do peso
// -Entre 30 e 40 obeso;
// -Acima de 40 Obesidade Grave;

const PesoKG = 80
const AlturaMetros = 1.69

const imc = PesoKG / Math.pow(AlturaMetros, 2)

console.log('Seu IMC é de:', imc.toFixed(2))

if (imc < 18.5) {
   console.log('Você está abaixo do peso!')
} else if (imc >= 18.5 && imc < 25) {
   console.log('Você está com o peso normal!')
} else if (imc >= 25 && imc < 30) {
   console.log('Você está acima do peso!')
} else if (imc >= 30 && imc < 40) {
   console.log('Você está obeso!')
} else {
   console.log('Você é a tais Carla!!!')
}