// Operadores de comparação estritamente igual e estritamente diferente

/* Irá comparar valores e o tipo do elemento, depois irá 
retornar um Boolean como resposta à comparação estrita */

let one = 1
let two = 2

// === estritamente igual a
console.log(one === "1") // false - pois o valor de 1 é number e não string
console.log(one === 1) // true - pois o valor de 1 é number 

// !== estritamente diferente de
console.log(two !== "2") // true - pois o valor de 2 é number e não string
console.log(two !== 2) // false - pois o valor de 2 é number