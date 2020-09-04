// Na busca sequencial a ordem em que os elementos aparecem não importa
// pois tera que percorrer todos os elementos mesmo

// Pré-requisito para a busca binária: o conjunto de dados
// PRECISA estar ordenado pelo critério de busca, caso o critério mude
// é necessário reordenar a lista
// Exemplo: ordem alfabética

let comp = 0
function buscaBinaria(lista, valorBusca) {// lista universo de dados e um valor a ser buscado
    let inicio = 0
    let fim = lista.length - 1 // length = pposiçãoes totais do vetor
    // para chegar na ultima posição lenght - 1
    
    while(fim >= inicio) {
        // Math.floor(): retira as casas decimais de um número
        // arredonda para baixo

        let meio = Math.floor((fim + inicio) / 2)
        // necessário fazer assim pois nem sempre o inicio vai entar na posição 0
        // não da para seguir com esse tipo de função com resultado decimal

        // Verifica se o valor na posição média é o valor de busca
        if(valorBusca === lista[meio]) { // === certeza absoluta
            comp++
            return meio 
        } 
        else if(valorBusca < lista[meio]){
            comp += 2
            fim = meio - 1
        }
        else { // valorBusca > lista[meio]
            comp += 2 // para saber quantas comparaçãoes foram feitas ate chegar ao resultado
            inicio = meio + 1
        }
        // como a busca começa pelo meio, ele sempre verificar se essa posição é o
        // número procurado, caso não verificar se é maior ou menoor que o meio
        // e reajusta a posição do inicio ou do fim para reajustar a busca
        // descartando os números que não estão dentro do grupo de busca e reajustando a 
        // posição do meio conforme o resultado da conta 
        
        // descobre-se que o numero procurado não existe quando a posição final fica 
        // anterior a posição incial por exemplo
    }
    return - 1  // valor não encontrado
}

// Para busca de dados vamos trabalhar sempre com 3 var
// vai ter inicio, meio e fim
// Math.ceil = arredonda para cima/ Math.roud = arredonda conforme regra matemática
// primeiro passo checar a posição do meio

let vetorNomes = require('./dados/vetor-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(vetorNomes, 'FAUSTO'))
console.timeEnd('FAUSTO')
console.log('Comparações: ', comp) // exibir a quant de comparações

console.log('---------------------------------------')

comp = 0 // tem que zerar para não somar com as comparações anteriores
console.time('ZYON')
console.log(buscaBinaria(vetorNomes, 'ZYON'))
console.timeEnd('ZYON')
console.log('Comparações: ', comp)

console.log('---------------------------------------')

comp = 0 // tem que zerar para não somar com as comparações anteriores
console.time('INSTRGRAMILDA')
console.log(buscaBinaria(vetorNomes, 'INSTRGRAMILDA'))
console.timeEnd('INSTRGRAMILDA')
console.log('Comparações: ', comp)