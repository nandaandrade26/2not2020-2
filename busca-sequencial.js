function buscaSequencial(lista, valorBusca) {
    for(let i = 0; i < lista.length; i++) {
        if(lista[i] === valorBusca) return i
    }
}

return -1 

//O esquema module.esport + require() só funciona em JavaScript
//para ser executado no Node. Não funciona em JS dentro de páginas
//HTML

const nomes = require('./dados/vetor-nomes')


console.log('--------------------------------')

console.time('FAUSTO')
console.log(buscaSequencial(listanomes, 'FAUSTO'))
console.timeEnd('FAUSTO')

console.log('--------------------------------')

console.time('ZULEICA')
console.log(buscaSequencial(listaNomes, 'ZULEICA'))
console.timeEnd('ZULEICA')