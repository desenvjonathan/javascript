/*
  * Array (vetores)
    * Uma lista
    * Agrupamento de dado
    
    ["Jonathan", 25]
*/
console.log([
  "Jonathan", // podemos usar a quebra de linhas dentro de um array
  25
])

console.log([
  "Ovos",
  "Leite",
  "Manteiga",
  2,
  3,
  1,
])

// Array (revisão)

const animals = [
  'Lion', // 0
  'Monkey', // 1
  {
    name: 'Cat',
    age: 3,
  }, // 2
]

// como acessar valores dentro de um array?
//console.log(animals[0])

// como acessar quantos valores temos dentro de um array?
//console.log(animals.length)

// caso tentamos acessar um valor que não está definido, como por exemplo:
//console.log(animals[3])

/* nós também podemos colocar objetos dentro do array, que também poderá ter 
seu valor acessado da mesma forma  */
//console.log(animals[2])

/* também podemos acessar uma propriedade DENTRO do objeto, da seguinte forma */ 
console.log(animals[2].name)

/* Nós também padronizamos todo o array, colocando apenas objetos, ou apenas strings,
para não ocorrer confusão na hora da execução futuramente.*/
