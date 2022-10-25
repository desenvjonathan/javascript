/*
  Function () constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person (name){
  this.name = name //essa palavra serve para referenciar ao que está lá fora
  this.walk = function() {
    return this.name + " está andando"
  }
}
const jonathan = new Person('Jonathan') /* ao usar a expressão new, seguida da função Person, 
se torna uma função construtura e ela retornará um objeto */
// e isso funciona como se fosse um molde, para criar diversos objetos
const mayk = new Person('Mayk')
console.log(jonathan.walk())
console.log(mayk.walk())


