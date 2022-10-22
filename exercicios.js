// // 1. Declare uma variável de nome weight
// //  var weight;

// // // 2. Que tipo de dado é a variável acima?
// // console.log(typeof weight) //undefined

// /*
//   3. Declare uma variável e atribua valores para cada um dos dados:
//     * name: String
//     * age: Number (integer/inteiro)
//     * stars: Number (float/reais)
//     * isSubscribed: Boolean (true/false)
// */
//   let name = 'John'
//   let age = 34
//   let stars = 4.2
//   let isSubscribed = false

// /*
//   4. A variável student abaixo é de que tipo de dado? 
//   // objeto

//   4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

//   4.2 Mostre no console a seguinte mensagem:
//     <name> de idade <age> pesa <weight> kg.
//     Atenção, substitua <name> <age> e <weight> pelos valores 
//     de cada propriedade do objeto
// */

// let student = {
//   name1: 'John',
//   age: 34,
//   stars: 4.2,
//   weight: 88,
// }
// // console.log(student)
// // console.log(`${student.name1} de idade ${student.age} pesa ${student.weight}kg.`)

// /*
//   5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum 
// //   valor, ou seja, somente o Array vazio 
// // */
// // let  students = []

// // /*
// //   6. Reatribua valor para a variável acima, colocando dentro dela o objeto
// // //   student da questão 4. (não copiar e colocar o objeto, mas usar o objeto
// // //   criado e inseriar ele no Array)
// // */
// // students = [
// //   student
// // ]
// // // console.log(students)

// // /*
// //   7. Coloque no console o valor da posição zero do Array acima
// // */
// // console.log(students[0])

// /*
//   8. Crie um novo student e coloque na posição 1 do Array students
// */
// const dan = {
//   name: 'Dan',
//   age: 18,
//   weight: 60,
//   isSubscribed: true,
// }

// students = [
//   student,
//   dan
// ]
// console.log(students)

/*
  9. Sem rodar o código responda qual é a resposta do código abaixo e por que?
  Após sua resposta, rode o código e veja se acertou

  console.log(a)
  var a = 1

  será undefined, por causa do conceito de hoisting. A variável não havia sido
  criada anteriormente ao console.log
*/