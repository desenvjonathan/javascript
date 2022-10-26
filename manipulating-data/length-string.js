// Manipulando Strings e Números

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número	

let word = "Paralelepípedo"
console.log(word.length)

let number = 123123
console.log(number.length) // retorna undefined
/* nesse caso não tem como contar quantos caracteres tem de uma variável tipo number,
então basta transformar em string que isso é possível*/
console.log(String(number).length)
