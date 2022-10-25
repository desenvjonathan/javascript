// callback function (chamar de volta)
// é uma função que está passando parâmetro para outra função
function sayMyName(name) {
  console.log('antes de executar a função callback')

  name()

  console.log('depois de executar a função callback')
}

sayMyName(
  () => {
    console.log('estou em uma callback') 
  }
) 
//posso passar aqui qualquer tipo de dado (string, number, boolean, object e também function)
