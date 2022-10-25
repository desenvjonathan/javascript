// sum (somar) 
// function expression
// function anonymous

// criar parâmetros (parameters) que vão receber os argumentos de uma função
const sum = function (number1, number2){
  total = number1 + number2
  return total
}

// passar argumentos (arguments) para a execução de uma função
let number1 = 34 // sabemos que como está fora do escopo, esses numbers, são diferentes
let number2 = 25 //dos numbers acima

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
