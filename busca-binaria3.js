//PARA TODOS OS EFEITOS PARÂMETROS FUNCIONA COMO VARIÁVEL
//ENTÃO NÃO PODE TER UMA VARIÁVEL COM O MESMO NOME DA FUNÇÃO
let comp = 0

//Implementação recursiva
// Uma função chama a si mesma com pelo menos um de seus parâmetros com valor alterado
//Nesse caso nãoo se faz necessário um loop
//Pois tem saida de valor em todas as posições, onde a função executa a tarefa em etapas
//Ou seja cada vez que chama a função dentro dela própria diminui a area de busca
//Toda implementação recursiva tem que ter pelo menos uma
//condição de saída, isto é, uma possibilidade de término que 
//não envolve a função chamar ela mesma

//Os parâmetros inicio e fim são OPICIONAIS. Caso a função seja chamada sem especifiação
// eles assumirão os valores idicados

function buscaBinaria(lista, valorBusca, fnComp, inicio = 0, fim = lista.length - 1) {

    // lista = universo de dados /valor = valor a ser buscado/ fnComp = parametro genérico
    //Quando tem parâmetro obrigatório e opicional, o opcional vem por último
    //nesse modelo o usuário informa o valor de inicio e fim, por isso foi adicionado como parâmetro
    // pois não esta sendo informado no sistema como no modelo ante.
    //let inicio = 0
    //let fim = lista.length - 1
    
    if(fim >= inicio) {
        // Math.floor(): retira as casas decimais de um número
        // arredonda para baixo

        let meio = Math.floor((fim + inicio) / 2)
        // necessário fazer assim pois nem sempre o inicio vai entar na posição 0
        // não da para seguir com esse tipo de função com resultado decimal

        let res = fnComp(lista[meio], valorBusca)
        // como a lista é um objeto a busca é feita não da para fazer comparação direta
        //apenas usando o valor de resultado/retorno para comparação 
        // não compara string com objeto inteiro

        // Verifica se o valor na posição media é o valor da busca
        if(res == 0) { 
            comp++
            return meio //Condição de saida, não chama de novo função
            
        } 
        else if(res < 0){
            comp += 2
           //fim = meio - 1, nesse caso ao invés de mexer no ponteiro do fim
           //chama a função com os mesmos parâmentros e só faz o calculo da posição do meio
           return buscaBinaria(lista, valorBusca, fnComp, inicio, meio -1)
        }
        else { // res > 0
            comp += 2 // para saber quantas comparaçãoes foram feitas ate chegar ao resultado
            //inicio = meio + 1
            return buscaBinaria(lista, valorBusca, fnComp, meio + 1, fim)
        }
       
    }
    //condição de saída
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

let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, 80, 88, 94]

//console.log(buscaBinaria(nums, 66, (elPos, busca) => {
    //if(busca === elPos) return 0
    //else if (busca < elPos) return -1
    //else return 1
//}, 0, 12)) nesse exemplo vc tem que saber quantas posiçãoes o vetor tem para passar os valores, obrigatório passar os valores

//Quando os parâmentros são opicionais não é necessários informar os valores
console.log(buscaBinaria(nums, 66, (elPos, busca) => {
    if(busca === elPos) return 0
    else if (busca < elPos) return -1
    else return 1
}))

//Termina execução sem passar pelas linhas abaixo
//process.exit(0) // 0 = saindo ok, sem erros
// qualquer saida de programa com valor diferente de 0 significa erro no sistema


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