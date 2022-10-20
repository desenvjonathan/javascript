/* estamos definindo uma variável (clima), que está recebendo ( com o sinal de = )
uma string de valor "quente" */
const clima = "quente"
clima = "frio" /* reatribuindo o valor da string para "frio", o console log  não irá
mudar para "frio", diferente do var e let, pois ao definir uma variável const, ela
se torna constante para todo o código, ou seja, não poderá mudar e dará erro, 
caso tente forçar uma mudança dessa forma */
console.log(clima)