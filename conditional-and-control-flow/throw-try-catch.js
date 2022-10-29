//throw (disparar / lançar)

// function sayMyName(name = '') {
//   if(name === '') {
//     throw 'Nome é obrigatório' //irá interromper a aplicação
//   } 
//   console.log('depois do erro')
// }

// //try(tentar)...catch(pegar / capturar)
// try { // ou seja, irá tentar rodar esse código, se não conseguir
//   sayMyName()
// } catch(e) {// irá capturar o erro, e o código continua rodando
//   console.log(e)
// }

// console.log('após a função de erro')//como podemos ver aqui

// descomentar em cima

function sayMyName(name = '') {
  if(name === '') {
    throw 'Nome é obrigatório' //irá interromper a aplicação
  } 
  console.log(name)
}

//try(tentar)...catch(pegar / capturar)
try { // ou seja, irá tentar rodar esse código, se não conseguir
  sayMyName('Jonathan')
} catch(e) {// irá capturar o erro, e o código continua rodando
  console.log(e)
}

console.log('após o try/catch')//como podemos ver aqui

