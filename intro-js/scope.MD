# Scope

* Escopo determina a visibilidade de alguma variável no JavaScript

# Block statement (declaração)
```js
// vamos iniciar um bloco
{
  // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```

O bloco também criará um novo escodo. Chamamos de `block-scoped`




## var
```js
/* var é global (é tudo que está executando na minha aplicação) e poderá funcionar fora de um escopo de bloco e também é local (é somente o que existe dentro de um escopo) */

console.log('> existe x antes do bloco?', x)

{
  var x = 0
}

console.log('> existe x depois do bloco?', x)
```




## let e const
```js
// const e let são locais e só funcionam no escopo onde foi criada
console.log('> existe y antes do bloco?',y)

{
  let y = 0
}

console.log('> existe y depois do bloco?', y)
```
