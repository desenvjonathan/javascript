// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocas ponto por  vírgula
let number = 985.1082487
console.log(number.toFixed(2).replace(".", ",")) //podemos atrelar vários métodos (nesse caso toFixed e replace)
// toFixed é uma função ATRELADA ao number, para contar as decimais (nesse caso, duas)
// replace é para efetuar trocas, nesse caso trocar o ponto(".") por(,) vírgula(",")
/* com essa troca de ponto por vírgula o number se tornou uma string e se 
forçarmos a troca dessa string por número */
console.log(Number(number.toFixed(2).replace(".", ","))) 
// resultado é NaN, pois a vírgula não faz parte de um número
