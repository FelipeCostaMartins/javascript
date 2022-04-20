var num = [2, 1, 5, 4, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
console.log(`O valor 4 está na posição ${pos}`)



//num[3] = 6
// num.push(7) //.push refere ao ultimo elemento
// num.length // referese a quantidade de elementos (nesse caso seria 5)
// num.sort() // pega os elementos e coloca em ordem crescente



/* let valores=[8,1,7,4,2,9]
console.log(valores)

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

// let valores = [8,1,7,4,2,9]
// valores.sort()
// for(let pos in valores) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }