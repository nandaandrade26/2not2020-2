// Recebe dois vetores JÁ ORDENADOS PREVIAMENTE e o mescla
// em um único vetor, também ORDENADO
// Esse processo é a subrotina, na qual ele ordena os vetores, depois de 
// ter separado o vetor inicial e ter feito a ordenação de cada lado
function mesclarVetores(vetEsq, vetDir) {
    let vetRes = [], posEsq = 0, posDir = 0, sobra
    //As variáveis posEsq e posDir funciona como a seta que percorrem cada vetor
    while(posEsq < vetEsq.length && posDir < vetDir.length) {
        if(vetEsq[posEsq] < vetDir[posDir]) {
            vetRes.push(vetEsq[posEsq])
            posEsq++
        }
        else { // vetDir[posDir] < vetEsq[posEsq]
            vetRes.push(vetDir[posDir])
            posDir++
        }
        
    }    
    // Como o vetor de um dos lados vai sempre estourar/acabar primeiro
    // em um dos vetores vai sempre sobrar um número, então é necessário
    // verificar as sobras para adicionar esse número ao vetRes

    // Slice(): retorna um subvetor a partir da posição informada até o final

    // Sobra do vetor da esquerda
    if(posEsq < posDir) sobra =  vetEsq.slice(posEsq) 
    // Sobra vetor da direita
    else sobra = vetDir.slice(posDir)
    
    //console.log({posEsq, posDir, sobra})

    // A sobra é acrescentada ao resultaddo final
    return vetRes.concat(sobra)
}

// Algoritimo principal, que divide o vetor e ordena os valores inicialmente
function mergeSort(vetor) {

    if(vetor.length > 1) { // Iforma que vai permanecer dividindo o vetor até ele ter apenas uma posição
        // Encontra o meio do vetor
        let meio = Math.floor(vetor.length / 2) // Aqui divide o vetor inicial em duas partes
        let vetEsq = vetor.slice(0, meio) // A posição do meio NÃO entra
        let vetDir = vetor.slice(meio)
        vetEsq = mergeSort(vetEsq) // Aqui divide o vetor da esquerda em duas partes
        vetDir = mergeSort(vetDir) // Aqui divide o vetor da direita em duas partes
        return mesclarVetores(vetEsq, vetDir)
    }
    return vetor
}

// Resultado esperado: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//console.log(mesclarVetores([0, 4, 7, 8, 9], [1, 2, 3, 5, 6]))

console.log(mergeSort([33, 98, 77, 49, 2, 26, 93, 51, 14, 64]))

