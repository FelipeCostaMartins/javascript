// 3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário. Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.

// O salário a ser transferido é calculado da seguinte maneira:
// Valor bruto do salário - percentual de impostos mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:
//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

// Exemplo:
//      Entrada:
//          2000
//          250
//      Saída:
//          2050.00

const { calcularSalarioLiquido, print } = require('./funcoes-auxiliares-ex3.js')

class Funcionario {
    constructor(salarioBruto, valorBeneficios){
        if (typeof funcionario !== 'object' || funcionario === null) {
            throw new Error('O parâmetro "funcionario" deve ser um objeto válido.');
        }
    
        if (typeof funcionario.salarioBruto !== 'number' || typeof funcionario.valorBeneficios !== 'number') {
            throw new Error('As propriedades "salarioBruto" e "valorBeneficios" do objeto "funcionario" devem ser números.');
        }
        
        this.salarioBruto = salarioBruto
        this.valorBeneficios = valorBeneficios
    }
}

const jessica = new Funcionario(2000, 250)

print(calcularSalarioLiquido(jessica))