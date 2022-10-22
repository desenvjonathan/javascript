/*
  * Object (é um dado estrutural)
    * Objeto (ex.: pensa no seu celular)
    * Propriedades / Atributos (ex.: ele tem altura? ele tem cor? ele tem peso?)
    * Funcionalidades / Métodos (ex.: quais as funcionalidades desse celular?)
  sintaxe: { propriedades: "valor"}
*/

console.log({
  name: "Jonathan", // Propriedade de nome: name, com o valor: Jonathan
  idade: 25, // para abrir outro objeto, é necessário colocar a vírgula
  andar: function (){ // aqui dentro nós temos uma funcionalidade
    console.log('andar')
  }
})

// Object (revisão)

const person = {
  name: 'John',
  age: 30,
  weight: 88.6, // peso
  isAdmin: true
}

console.log(person.name) // com isso pegamos apenas UMA propriedade do objeto person

console.log(`${person.name} tem ${person.age} anos.`)