//  Estrutura de repetição
// for (para)

for(let i = 0; i <= 10; i++) {
  console.log(i)
} /* ou seja, o "for" rodará o código até que a variável seja falsa.
nesse caso, o i será incrementado(somará +1), e o código parará de rodar
assim que o i chegar até 10*/

for(let i = 10; i >= 0; i--) {
  console.log(i)
}/* ou seja, o "for" rodará o código até que a variável seja falsa.
nesse caso, o i será decrementado(perderá -1), e o código parará de rodar
assim que o i chegar até 0*/

for(let i = 0; i <= 10; i++) {
  if(i === 5) {
    break;
  }
  console.log(i)
}  /*ou seja, o "for" rodará o código até que a variável seja falsa.
nesse caso, o i será incrementado(somará +1), e o código parará de rodar
assim que o i chegar até 5, por causa do break*/

for(let i = 10; i >= 0; i--) {
  if(i === 5) {
    break;
  }
  console.log(i)
} /* ou seja, o "for" rodará o código até que a variável seja falsa.
nesse caso, o i será decrementado(perderá -1), e o código parará de rodar
assim que o i chegar até 5*/

for(let i = 0; i <= 10; i++) {
  if(i === 5) {
    continue;
  }
  console.log(i)
} /*ou seja, o "for" rodará o código até que a variável seja falsa.
nesse caso, o i será incrementado(somará +1), e o código pulará
assim que o i chegar no 5, por causa do continue e depois prosseguirá, 
até chegar no valor desejado, que é 10 */

// break - para a execução do loop
//continue - pula a execução do momento