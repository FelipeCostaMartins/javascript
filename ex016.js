/* function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let res = parimpar(223)

console.log(res)
console.log(parimpar(223)) */

//======================================
// SEGUNDO EXERCICIO
//======================================

/* function soma(n1=0, n2=0) {
    return n1+n2
} */

// console.log(soma(2, 5))
// console.log(soma(2)) // nesse caso ele fara 2+0 pois como o n2 n foi denifido ele continua sendo 0

//======================================
// TERCEIRO EXERCICIO
//======================================

/* let v = function (x) {
    return x*2
}

console.log(v(5)) */

//======================
// EXTRAS 
//====================

// Recursividade
/* function fatorial(n) {
    if(n == 1) {
        return 1
    } else {
        return n * fatorial (n-1)
    }
} */

// a mesma coisa do anterior porem de maneira 'tradicional'
/* function fatorial(n) {
    let fat = 1
    for (let c = n; c>1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5)) */

//(objetivo desse exericio é fazer o fatorial do numero ou seja 5 x 4 x 3 x 2 x 1 = (120 mostrar isso))