// const e let são locais e só funcionam no escopo onde foi criada
//console.log('> existe y antes do bloco?', y)
const y = 1

{
  const y = 0
  console.log('> existe y?', y)
}

console.log('> existe y depois do bloco?', y)
