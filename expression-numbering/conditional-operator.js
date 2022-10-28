// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top
let pao = true
let queijo = true

//const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim' 
// pao e(&&) queijo, então(?) café top senão(:) café ruim
// caso troquemos um dos valores para false, o café será ruim, por causa do e(&&)

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim' 
// pao ou(||) queijo, então(?) café top senão(:) café ruim
// caso troquemos os dois valores para false, o café será ruim, por causa do ou(||)
console.log(niceBreakfast)

// Maior de 18
//let age = 16 // can't drive (não pode dirigir)
let age = 18 // can drive (pode dirigir)
const canDrive = age >= 18 ? 'can drive' : "can't drive"
/* Se a age(idade) for maior ou igual(>=) a 18, então(?) can drive(pode dirigir) 
senão(:) can't drive(não pode dirigir) */
console.log(canDrive)