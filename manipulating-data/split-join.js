// Manipulando Strings e Arrays

/*
  Separe um texto que contém espaços, em um novo array onde cada texto é uma
  posição do array. Depois disso, transforme o array em um texto e onde eram espaços
  coloque _(underscore)
*/

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") // para separar por espaços em branco
console.log(myArray)
let phraseWithUnderscore = myArray.join("_") // o método join serve para juntar o array e transformar em texto
console.log(phraseWithUnderscore.toUpperCase())
