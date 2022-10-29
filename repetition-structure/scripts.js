// for...in
// ele criará um loop em cima de um objeto

let person = {
  name: 'Jonathan',
  age: 25,
  weight: 60,
}

for(let property in person) {
  console.log(property) 
  // ou seja, esperamos ver as propriedades do objeto (name, age e weight)

  console.log(person[property])
}
/* o código roda o console.log de cima e o console.log de baixo, até imprimir
todas as informações */