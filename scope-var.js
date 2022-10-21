/* var é global (é tudo que está executando na minha aplicação) 
e também é local (é somente o que existe dentro de um escopo) */
var x
console.log('> existe x antes do bloco?', x)

{
   x = 0
}

console.log('> existe x depois do bloco?', x)
