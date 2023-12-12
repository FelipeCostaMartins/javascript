//Funções imediatamente executadas

(function () {
    console.log("legal");
}) ();

//Funções

function escrevaMeuNome(nome) {
    console.log('Seu nome é', nome);
}

escrevaMeuNome('Felipe');

function verificarMaiorIdade(idade) {
    if (idade >= 18){
        console.log('Você é maior de idade')
    } else {
        console.log('Você é menor de idade!!')
    }
}

verificarMaiorIdade(18)
