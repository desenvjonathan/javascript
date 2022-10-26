/*
  Type conversion (typecasting) - Uma capacidade nossa de causar uma conversão 
  
  vs 
  
  Type coersion - Uma capacidade do JavaScript de FORÇAR uma alteração

  * Alteração de um tipo de dado para outro tipo
*/

console.log('9' + 5) /* Type coersion - nesse caso, o JS, FORÇOU a transformação do Number (5) em
uma String, como podemos ver na imagem abaixo */ 

console.log(Number('9') + 5) /* Type conversion - nesse caso, NÓS forçamos a string a se tornar um número */