// Manipulando Strings e Arrays

// Verificar se o texto contém a palavra Amor

let phrase = "Eu quero viver!"
console.log(phrase.includes("Amor")) // false
// includes serve para verificar se encontra a palavra desejada no texto

let love = "Eu quero viver o amor!"
console.log(love.includes("Amor")) // false
// includes é case sentive, ou seja, a letra maiúscula e minúscula faz diferença

let Love = "Eu quero viver o Amor!"
console.log(Love.includes("Amor")) // true