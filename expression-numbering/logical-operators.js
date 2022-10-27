// Operadores lógicos (logical operators)

// 2 valores booleanos, quando verificados, resultará em verdadeiro e falso

let pao = true // para fazer os testes abaixo, trocar para false
let queijo = true // para fazer os testes abaixo, trocar para false

/* AND && (precisa necessáriamente ter os dois para ser true, 
ou seja, se não tem queijo ou pão, é false)*/
//console.log(pao && queijo) //true

/* OR  || (alt + 124) (pode ter um ou o outro para ser verdadeiro,
ou seja, se não tiver pão ou queijo, mas se tiver um dos dois, é verdadeiro*/
//console.log(pao || queijo) //true


/* NOT ! () // é um operador de negação, e a partir do momento que negamos, 
ele troca o resultado, nesse caso estava true e se tornou false */
console.log(!pao, !queijo)  // false false
