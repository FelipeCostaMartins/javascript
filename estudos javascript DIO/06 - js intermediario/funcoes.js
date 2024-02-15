//Function Declaration and Function Expression

// function nomeDaFuncao() {
//     console.log('nomeDaFuncao')
// }

// const nomeDeOutraFuncao = function () { //quando o hosting jogar pra cima essa função só jogara a variavel dela e não o seu valor.
//     console.log('nomeDeOutraFuncao')
// }

//--------------------------------------------

// Arrow function
//(ela não cria um contexto isolado portanto quando precisar utilizar o "this" não irá funcionar)

// const funcao = () => {
//     console.log('funcao')
// }

//--------------------------------------------

//Closures ou Fechamentos
// (Quando declaramos uma função, ela se lembra do contexto que ela foi criada)

// function soma(x) {
//     return function(y) {
//         return x + y
//     }
// }

// // onsole.log(soma(10)(20))

// const somaParcial = soma(10)

// console.log(somaParcial(20))
// console.log(somaParcial(30))

//--------------------------------------------

//Invocação Direta, Call, Apply e Operador New
// const pessoa = {nome: 'Renan', idade: 30}
// function gritar(prefixo) {
//     console.log(prefixo, this.nome)
// }

// gritar('Olaaaaa')

// gritar.apply(pessoa, ['Olaaaaa'])
// gritar.call(pessoa, 'Olaaaaa')

//--------------------------------------------
