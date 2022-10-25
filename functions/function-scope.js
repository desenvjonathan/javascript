// function scope
let subject 

function createThink() {
  subject = 'study'
}

console.log(subject) // como o subject não foi definido, ele retorna undefined
console.log(createThink())/* ele retorna esse valor de "study", pois temos a palavra reservada return 
sem ela também teríamos "undefined" */
console.log(subject) // seu valor é "study", pois seu valor foi atualizado ao passar pela function


