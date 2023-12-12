//DESAFIO 5

// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// 1- À vista Débito, recebe 10% de desconto;
// 2- À vista no dinheiro ou no pix, recebe 15% de desconto;
// 3- Em duas vezes, preço normal de etiqueta sem juros;
// 4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%

const Playstation5 = 4999.99
const FormaPagamento = 4

console.log('Valor base do Playstation 5: R$', Playstation5)

if (FormaPagamento === 1) {
   console.log('Seu produto comprado à vista no débito custará: R$', (Playstation5 - (Playstation5 * 10) / 100).toFixed(2))
} else if (FormaPagamento === 2) {
   console.log('Seu produto comprado à vista no dinheiro ou pix sairá por: R$', (Playstation5 - (Playstation5 * 15) / 100).toFixed(2))
} else if (FormaPagamento === 3) {
   console.log('Seu produto comprado em duas vezes custará: R$', Playstation5)
} else {
   console.log('Seu produto pago em parcelas sairá por: R$', (Playstation5 + (Playstation5 * 10) / 100).toFixed(2))
}
