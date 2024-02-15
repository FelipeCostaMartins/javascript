// FOREACH
// É uma forma de percorrer a lista orientado a funções.

// const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// lista.forEach((value, i, listRef) => [
//     console.log(value, i, listRef)
// ])

//--------------------------------------------

// FILTER

// const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const listDeNumerosPares = alista.filter((element) => {
//     return (element % 2 === 0)
// })

// console.log(lista)
// console.log(listaDeNumerosPares) //retorna uma lista nova

//--------------------------------------------

// MAP

// class Pessoa {
//     constructor(name) {
//         this.name = name
//     }
// }

// const lista = [new Pessoa('Renan'), new Pessoa('Andresa'), new Pessoa('Vitor'), new Pessoa('José')]

// const listaNomes = lista.map((element) => element.name)

// console.log(listaNomes)

//--------------------------------------------

// REDUCE
// Ele percorre a lista a combina para reduzir para um unico elemento

// const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const somaDeTodosOsNumeros = lista.reduce((previous, curremt) => {
//     return previous + curremt
// }, 0)

// console.log(somaDeTodosOsNumeros)

//--------------------------------------------

// JOIN

// const lista = [1, 2, 3]

// console.log(lista.join('/')) 