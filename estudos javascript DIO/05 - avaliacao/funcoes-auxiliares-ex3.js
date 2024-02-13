function calcularSalarioLiquido(funcionario) {
    // Constantes para as taxas de desconto
    const TAXA_ATE_1100 = 0.05;
    const TAXA_ATE_2500 = 0.10;
    const TAXA_ACIMA_2500 = 0.15;

    let taxaDesconto;
    
    // Determinar a taxa de desconto com base no salário bruto
    if (funcionario.salarioBruto <= 1100) {
        taxaDesconto = TAXA_ATE_1100;
    } else if (funcionario.salarioBruto <= 2500) {
        taxaDesconto = TAXA_ATE_2500;
    } else {
        taxaDesconto = TAXA_ACIMA_2500;
    }

    // Calcular o salário líquido
    const salarioLiquido = funcionario.salarioBruto - (funcionario.salarioBruto * taxaDesconto) + funcionario.valorBeneficios;
    
    return salarioLiquido;
}

function print(valor){
    console.log(valor)
};

module.exports = { calcularSalarioLiquido, print };
