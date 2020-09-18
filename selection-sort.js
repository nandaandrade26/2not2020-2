function selectionSort(vetor) {
    let passadas = 0, comparacoes = 0, totalTocas = 0
    
    //Função que encontra o menor valor em um segmento de vetor (subvetor)
    // A função deve retornar A POSIÇÃO  do menor valor encontrado
    function encontrarMenor(vetor, inicio) {
        let posicao = inicio
        for(let i = inicio + 1; i < vetor.length; i++) {
            if(vetor[i] < vetor[posicao]) posicao = i 
            comparacoes++
            // coloca inicio + 1, para que ele inicie a busca na posição da frente
            // e não compare a posição com ela mesma. 
        }
        return posicao
    }
        // Precisa de uma váriavel que receba o valor comparado e realizar
        // a comparação entre a posição inicial e os demais valores, e quando
        // encontrar esse valor jogua ele para a variavel e retorna o valor

    // O for externo vai até a PENÚLTIMA posição
    for( i = 0; i < vetor.length - 1; i++){
        passadas++
        // Busca-se o menor valor no restante do vetor
        posicao = encontrarMenor(vetor, i + 1)

        // Caso o valor encontrado seja menor que o valor atual,
        // pocede-se a troca
        comparacoes++
        if(vetor[posicao] < vetor[i]) {
            // Permuta de valores usando desestruturação
            [vetor[posicao], vetor[i]] = [vetor[i], vetor[posicao]]
            totalTocas++
        }
    }
    console.log({passadas, comparacoes, totalTocas})
}
const nums = [56, 78, 44, 23, 99, 14, 60, 37, 6, 89, 31, 65]

console.time('nums')
selectionSort(nums)
console.timeEnd('nums')

console.log(nums) // Retornar 8 (posição do valor 6)

// for externo da 1ª a penultima
// for interno da posição do for externo mais 1 a útima

let nomes = require('./dados/100-mil-nomes')
console.time('Teste nomes')
selectionSort(nomes)
console.timeEnd('Teste nomes')
console.log(nomes)