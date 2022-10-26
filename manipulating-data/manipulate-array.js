// Manipulando Arrays
let techs = ["HTML", "CSS","JS"]


// adicionar um item no fim
techs.push("NodeJS")


// adicionar no começo
techs.unshift("SQL")


// remover do fim
//techs.pop()  //é necessário ter os parênteses e sempre que executar, ele vai remover um item do fim


// remover do começo
//techs.shift() //é necessário ter os parênteses e sempre que executar, ele vai remover um item do começo


// pegar somente alguns elementos do array
//console.log(techs.slice(1, 3)) 
//slice = cortar (primeiro argumento é para saber onde ele vai começar e o segundo é onde ele vai parar)


// remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 2)
//primeiro argumento é para saber onde ele vai começar e o segundo é onde ele vai parar


// encontrar a posição de um elemento no array
let position = techs.indexOf('CSS')
techs.splice(position, 1) // com isso, facilmente consigo remover o elemento desejado 
//(1 é o número de elemetos que quero remover)

console.log(techs)
console.log(position)