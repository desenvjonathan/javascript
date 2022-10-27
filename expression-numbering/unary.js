/*
  Operadores Unários
    typeof
    delete
*/
const person = {
  name: "Jony",
  age: 25,
}
delete person.age // vai procurar a propriedade dentro do objeto e vai deletar
// nesse caso, age foi deletado, portanto, só veremos a propriedade name no console.log
console.log(person)
console.log(typeof "Jonathan") // vai mostrar o tipo de dado, nesse caso string
