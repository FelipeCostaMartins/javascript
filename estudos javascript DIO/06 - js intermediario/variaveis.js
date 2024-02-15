// 1- javascript é CaseSensetive, ou seja, a forma como está declaro tem que estar exatamente igual quando chamada.
// 2- a linguagem vai tentar convertar dados para tentar encontrar uma solução
var va1 = 10 ;
var va2 = '20';
console.log(va1 + va2) 
// 3- Hoisting = O javascript altera a ordem das declarações, por exemplo, caso uma função esteja sendo chamada antes de ter sido se quer declarada é possível ainda se ter o mesmo resultado. Mas ele não altera/afeta as atribuições de valores no meio do código, apenas para declarações.
teste()

function teste(){
    console.log('Teste');
}

var var1;
console.log(var1);
var var1 = 'teste';
console.log(var1);

//nesse caso seguinte ele conseguirá ler o teste2 mas não o teste 1 pois ele jogara a declaração do teste um primeiro mas sem o seu valor atribuido ainda, representado como ficaria dessa seguinte maneira:

//var teste1

teste1()
teste2()

var teste1 = function(){console.log('teste1')}

function teste2() {console.log('teste2')}

//-------------------------------------------------------------

//VAR = têm escopo de função (scope) ou escopo global, o que significa que elas são visíveis em toda a função onde foram declaradas.podem ser redeclaradas e atualizadas em qualquer lugar do código(o que pode levar a problemas de sobrescrita de valores sem aviso).

//LET = têm escopo de bloco (block scope), o que significa que elas são visíveis apenas dentro do bloco onde foram declaradas (por exemplo, dentro de um loop for ou um bloco if). podem ser atualizadas, mas não podem ser redeclaradas no mesmo escopo.

//CONST = As constantes declaradas com const também têm escopo de bloco (block scope), assim como let. O valor de uma constante não pode ser alterado depois de ser atribuído(Mas se uma constante contém um objeto ou um array, por exemplo, os valores dentro desse objeto ou array podem ser alterados. O que não pode ser alterado é a ligação entre a constante e o valor.). 

//Recomenda-se usar const sempre que possível, e usar let apenas quando precisar reatribuir valores. Evite usar var, a menos que seja necessário para compatibilidade com versões mais antigas do JavaScript.

//-------------------------------------------------------------

