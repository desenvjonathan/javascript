/*
  Type conversion (typecasting) vs Type coersion
*/

console.log(Number('9') + 5) //eu transformei uma String em Number (14)
console.log('9' + 5) // o JavaScript transformou o Number em String e concatenou (95)

/*
  FALSY: Quando um valor é considerado false em contextos onde um booleano 
  é obrigatório (condicionais e loops)

  o JavaScript através do Type coersion transforma esses contextos em false no console.log

  false
  0
  -0
  ""
  null
  undefined
  NaN
*/
console.log(true ? 'verdadeiro' : 'falso') /* no lugar de true, colocar todos os 
contextos acima, o console.log retornará false */

/*
  TRUTHY: Quand9 um valor é considerado true em contextos onde um booleano
  é obrigatório (condicionais e loops)

  true
  {}
  []
  1
  3.23
  "0"
  "false"
  -1
  Infinity
  -Infinity
*/
console.log(false ? 'verdadeiro' : 'falso') /* no lugar de false, colocar todos os 
contextos acima, o console.log retornará true */