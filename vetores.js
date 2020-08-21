let vetor1 = []         //Forma "moderna"
let vetor2 = Array()   // Forma "tradicional"

// Criação de vetores com valores iniciais
let vetor3 = [2, 4, 6, 8, 10]
let vetor4 = Array('vaca', 'cachorro', 'gato', 'papagaio')

// Inserção de novos valores em um vetor

//Forma 1: push()  -> adiciona novos elementos AO FINAL do vetor
vetor1.push('laranja')
vetor1.push('limão')

console.log(vetor1)

// Forma 2: unshift() -> adiciona novos elementos NO INICIO do vetor
vetor1.unshift('maça')
console.log(vetor1)

vetor1.unshift('abacaxi')
console.log(vetor1)

// Forma 3: splice()
// 1º parâmetro: a posição de inserção
// 2º parâmetro: quantos elementos serão eliminados  (para inserção)
vetor1.splice(2, 0, 'morango')
console.log(vetor1)

vetor1.splice(1, 0, 'jaca')
console.log(vetor1)

// Remoção de elementos do vetor

// Forma 1: pop() -> tira o ÚLTIMO elemento do vetor
let x1 = vetor1.pop()
console.log(vetor1, x1)

// Forma 2: shift() -> retira o PRIMEIRO elemento do vetor
let x2 = vetor1.shift()
console.log(vetor1, x2)

// Forma 3: splice()
// 1º parâmetro: a posição para remoção
// 2º parâmetro: quantidade de elementos a serem removidos
// O retorno do splice() na remoçãi será um vetor contendo o item removido
let x3 = vetor1.splice(2, 1)
console.log(vetor1, x3)

// O splice tambèm serve para fazer subistituições
vetor1.splice(1, 1, 'pera')
console.log(vetor1)

// Colocando mais alguns elementos no vetor
vetor1.push('amora', 'jabuticaba')
vetor1.push('pêssego')
vetor1.push('uva')
vetor1.push('abacate')
console.log(vetor1)

// Métodos de percurso de vetores

// Forma 1: usando o for tradicional
// O início da variável é sempre na posição 0 e seu icremento
// deve ir até uma posiçaõ ANTES do seu número de elementos
// i++ significa i = i + 1

for(let i = 0; i < vetor1.length; i++) {
    console.log(vetor1[i])
}

console.log('--------------------------')

// Forma 2: for..of
// Percorrer do primeiro ao último elemento de uma forma
// mais simples que o for tradicional
for(let fruta of vetor1) {
    console.log(fruta)
}