let comp = 0
function buscaBinaria(lista, valorBusca, fnComp) {// lista = universo de dados /valor = valor a ser buscado/ fnComp = parametro genérico
    let inicio = 0
    let fim = lista.length - 1 // length = pposiçãoes totais do vetor
    // para chegar na ultima posição lenght - 1
    
    while(fim >= inicio) {
        // Math.floor(): retira as casas decimais de um número
        // arredonda para baixo

        let meio = Math.floor((fim + inicio) / 2)
        // necessário fazer assim pois nem sempre o inicio vai entar na posição 0
        // não da para seguir com esse tipo de função com resultado decimal

        let res = fnComp(lista[meio], valorBusca)
        // como a lista é um objeto a busca é feita não da para fazer comparação direta
        //apenas usando o valor de resultado/retorno para comparação 
        // não compara string com objeto inteiro

        if(res == 0) { 
            comp++
            return meio 
        } 
        else if(res < 0){
            comp += 2
            fim = meio - 1
        }
        else { // res > 0
            comp += 2 // para saber quantas comparaçãoes foram feitas ate chegar ao resultado
            inicio = meio + 1
        }
       
    }
    return - 1  // valor não encontrado
    
}

function comparaNome(obj, valorBusca){
    if(valorBusca === obj.first_name) return 0 // igualdade
    // Um número negativo para indicar que o primeiro < segundo
    else if(valorBusca < obj.first_name) return - 1 //menor que
    // Um número positivo para indicar que o primeiro é > segundo
    else return 1 // valorBusca > obj.first_name

    // 0 quando é igual a posição buscada
    // Um número negativo para indicar que é menor que a posição buscada
    // Um número positivo para indicar que é maior que a posição buscada
}

let listaNomes = require('./dados/lista-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(listaNomes, 'FAUSTO', comparaNome))//chama função para comparar e exibir no console
console.timeEnd('FAUSTO')
console.log('Comparações: ', comp)

console.log('---------------------------------')

// Usando arrow function, como os dados são ordenados não compensa usar
// não da para inventar uma possibilidade de busca na hora como na busca sequencial
// usaria-se a arrow function caso não tivesse uma função anterir para executar a tarefa
// compensa usar quando a resolução fica em apenas um linha
comp = 0
console.time('ENEDINO')
console.log(buscaBinaria(listaNomes, 'ENEDINO', (obj, busca) => {
    if(busca == obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('ENEDINO')
console.log('Comparações: ', comp)
