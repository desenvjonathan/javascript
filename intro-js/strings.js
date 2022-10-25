/*
  String é uma cadeia de  caracteres
    ex.: ABC ( A seguido de B, seguido de C)

  "" // aspas duplas
  '' // aspas simples
  `` // template literals ou template strings
*/

console.log('Jonathan')
/* Se for utilizar aspas dentro do texto como no exemplo abaixo, devemos utilizar
aspas duplas de fora e aspas simples dentro, ou ao contrário, aspas simples
de fora e aspas duplas dentro, para não bugar o código */

console.log("Um texto 'aqui' como exemplo")
console.log('Um texto "aqui" como exemplo')

/* Com o template literals ou template strings (crase), podemos utilizar aspas
simples e aspas duplas dentro do texto. E também podemos utilizar multi linha
como no exemplo abaixo */ 

console.log(`Um "texto" aqui 
'como'
exemplo`)

/* Dentro do template literals ou template string (crase), também podemos utilizar 
expressões de linguagem como no exemplo abaixo */

console.log(`Jonathan ${23 + 2}`) // isso também é conhecido como Interpolação
console.log(23 + 2)