/*
    Algoritimo de ordenação Bubbles Sort

    Estratégia:
    Percorrer o vetor de dados, comparando elementos adjacentes
    e promovendo a troca quando o sucessor é maior que o antecessor.

    O percurso no vetor é feito tantas vezes quando necessário, até
    que nenhuma troca seja efetuada no percurso.
*/

function bubbleSort(vetor) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    let trocas
    do {
        passadas++
        trocas = 0

        // Percurso do vetor até a PENÚLTIMA POSIÇÃO (length - 2)
        for(let i = 0; i <= vetor.length - 2; i++) {
            comparacoes++
            // Comparando o elemento da posição atual (i)
            // com o elemento da frente (i + 1)
            if(vetor[i] > vetor[i + 1]) {
                //Troca usando desestruturação de vetor
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                //Troca vai aqui
                trocas++
                totalTrocas++
            }
        }

    } while(trocas > 0)

    //Exibindo as estatísticas
    //para exibir o resultado de mais de uma variável no 
    //console.log() coloca elas dentro de um objeto, console.log({})
    console.log({passadas, comparacoes, totalTrocas})
}

let nums = [58, 16, 33, 82, 4, 47, 25, 71, 96, 68, 41, 89]

console.time('Teste 1')
bubbleSort(nums)
console.timeEnd('Teste 1')

console.log(nums)

/*let empresas = require('./dados/15-mil-empresas')

console.timeEnd('Teste empresas')
bubbleSort(empresas)
console.timeEnd('Teste empresas')
console.log(empresas) */

let nomes = require('./dados/100-mil-nomes')
console.time('Teste nomes')
bubbleSort(nomes)
console.timeEnd('Teste nomes')
console.log(nomes)


/* 
    Quando não tem desestruturação, tem que usar a variável auxiliar
    let a = 10
    let b = 4

    let aux = a
    a = b
    b = aux
*/

//quando digita só node no terminal, abre uma area para teste direto de cod