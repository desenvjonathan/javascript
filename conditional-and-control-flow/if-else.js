//if...else (se...senão)

/* if(condicional) {

} else {

}
sintaxe */
//ex.:

//let temperature = 36.5 // saudável
let temperature = 37.4 //febre moderada
//let temperature = 38 // febre alta

if(temperature >= 37.5) {
  console.log ('Febre alta')
} else if(temperature <37.5 && temperature >= 37) {
  console.log ('Febre moderada') /* podemos ter quantos else if forem necessários
para a aplicação */
} else {
  console.log('Saudável')
}
/* SE(if) a temperatura for MAIOR OU IGUAL(>=) a 37.5, "febre alta", 
SENÃO SE(else if) a temperatura for MENOR QUE(<) 37.5 E(&&) MAIOR OU IGUAL(>=) a 37, "febre moderada", 
SENÃO(else), "saudável" */

let temperature1 = 36.5 //saudável
let highTemperature = temperature1 >= 37.5
let mediumTemperature = temperature1 <37.5 && temperature1 >= 37

if(highTemperature) {
  console.log ('Febre alta')
} else if(mediumTemperature) {
  console.log ('Febre moderada') 
} else {
  console.log('Saudável')
}