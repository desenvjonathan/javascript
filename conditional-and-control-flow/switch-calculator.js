//switch 

/*  switch (expression) {
      case 'a'(caso a):
        código caso a(quantos forem necessários)
        break(ele é opcional, mas é importante colocar, para parar o código)
      case 'b'(caso b):
        código caso b
        break
      default: (se não cumprir nenhum dos casos acima)
        break  
}
Sintaxe
*/

let expression = 'a'

switch (expression) {
  case 'a':
    console.log('a')
    break
  case 'b':
    console.log('b')
    break
  default:
    console.log('default')
    break
}
//caso a expressão não tenha um break, o código rodará até o final

let expression1 = 'b' //podemos começar do b, por exemplo

switch (expression1) {
  case 'a':
    console.log('exemplo a')
  case 'b':
    console.log('exemplo b')
  default:
    console.log('exemplo default')
    break
}

// exemplo calculadora

function calculate(number1, operator, number2) {
  let result = 0

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('NÃO IMPLEMENTADO')
      break
  }

  return result
}

console.log(calculate(20, "+" ,2))
console.log(calculate(20, "-" ,2))
console.log(calculate(20, "*" ,2))
console.log(calculate(20, "/" ,2))
console.log(calculate(20, "%" ,2))
