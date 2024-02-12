function resolver(valores) {
  let maiorValorPar = valores[0];

  for (let i = 0; i < valores.length; i++) {
    if (maiorValorPar < valores[i] && valores[i] % 2 === 0) {
      maiorValorPar = valores[i];
    }
  }

  let menorValorImpar = valores[0];
  for (let i = 0; i < valores.length; i++) {
    if (menorValorImpar > valores[i] && valores[i] % 2 === 1) {
      menorValorImpar = valores[i];
    }
  }

  if (maiorValorPar % 2 === 0) {
    console.log(`Maior número par: ${maiorValorPar}`);
  } else {
    console.log("Não existe numeros pares!");
  }

  if (menorValorImpar % 2 === 1) {
    console.log(`Menor número impar: ${menorValorImpar}`);
  } else {
    console.log("Não existe numeros pares!");
  }
}

module.exports = { resolver };
