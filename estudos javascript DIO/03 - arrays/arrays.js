// const alunos = ['João', 'Vitor', 'Maria'];

// alunos.push('Renan') // .push adiciona mais um elemento a uma array 

// alunos.pop()   //.pop tira o ultimo elemento de uma array
// alunos.shift() // .shit tira o primeiro elemento de uma array
// alunos.length // mostra a quantidade de elementos de uma array

// alunos[3] = 'Vinícios';

// console.log(alunos)

//Laços For

// const nome = 'Vitor Johansen Guerra';

// for (let i = 0; i < nome.length; i++) {
//     const letra = nome[i]
//     console.log(letra);
// }

//DESAFIO
//1) crie um programa que dado um número imprima a sua tabuada.

// const numero = 2; //<------ insira aqui um numero para verificar a sua tabuada
// const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < tabuada.length; i++) {
//     const resultado = numero * tabuada[i];
//     console.log(`${numero} x ${i+1} = ${resultado}`);
// }

//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [1, 5, 7, 8, 9, 10, 12];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`O número ${numeros[i]} é PAR`) 
    }
}