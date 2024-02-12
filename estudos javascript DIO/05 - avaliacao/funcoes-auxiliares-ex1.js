function print(valor){
    console.log(valor)
}

function gets(aluno){
    let soma = 0
    for (let i = 0; i < aluno.length; i++) {
        soma = soma + aluno[i]
    }
    
    const media = soma / aluno.length

    if (media < 5) {
        return "Reprovado"
    } if (media >= 5 && media < 7) {
        return "Recuperação"
    } if (media >= 7) {
        return 'Aprovado'
    }
};

module.exports = { gets, print };