//IMPORTANTE NÃO DA PARA FAZER COMPARAÇÃO ENTRE DOIS OBJETOS
//USANDO O FNCOMP, DEIXA O ALGORITIMO GENÉRICO, OU SEJA, A COMPARAÇÃO
//NÃO É FEITA DENTRO DO ALGORITIMO E SIM PELA FUNÇÃO, ISSO POSSIBILITA
//QUE O MESMO CÓDIGO POSSO COMPARAR VARIOS ELEMENTOS DO OBJETO, BASTA
//APENAS QUE VC MUDE O OBJETO DE PESQUISA, E QUE DEFINE QUAL É O ELEMENTO
//MAIOR E O MENOR É A FUNÇÃO, POIS NÃO PASSAMOS OPERADOR DE COMPARAÇÃO


/* ATÉ 15 ELEMENTOS O BUBBLE SORT É BOM PARA SER UTILIZADO

    Adaptando o algoritimo Bubble Sort para operar com vetor de objetos

    1)  Acrescentar um novo parâmentro, que vai corresponder à função de
        comparação. (fnComp)
    2)  Essa função será chamada de debtro do bubbleSort(), recebendo o
        elemento da posição atual e da posição seguinte como parâmetros.
        Ela deve retornar true caso o primeiro parâmetro seja maior que
        o segundo, ou false caso contrário.

    ***** Para descobrir quais as PROPRIEDADES de um obejeto utiliza-se o for in    
    propriedades: lado esquerdo, identificação dos elementos, a frente fica o valor
    que são os dados passados para aquele elemento
*/

function bubbleSort(vetor, fnComp) {
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
            // if(vetor[i] > vetor[i + 1]) {

            // Dois objetos não podem ser comparados, então para ordenar cria - se uma função
            // para verificar se o 1º elemento é maior que o 2º ou não
            // nesse caso escolhemos qual vai ser o parâmetro para comparação

            if(fnComp(vetor[i], vetor[i + 1])) {
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

    const candidatos = require('./dados/candidatos-2018')

    console.time('Teste candidatos')
    bubbleSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
    // passa os parâmetros para a função, ela sempre vai ter dois elementos
    // o atual e o que está na sua frente, nesse caso o 1º esta sendo comparado 
    // ao 2º, só ha alteração se o 1º for maior
    console.timeEnd('Teste candidatos')

    // Fazendo um map() para produzir um novo vetor só com os nomes dos candidatos
    const nomesCandidatos = candidatos.map(o => o.NM_CANDIDATO)
    console.log(nomesCandidatos)

/*
    // Teste com localeCompare()
    // Serve para realizar corretamente a ordenação, considerando os acentos
    // porém ele é muito lento
    // Só os primeiros 1000 candidatos
    const candidatos1000 = candidatos.slice(0, 999)

    console.time('Teste candidatos 1000')
    bubbleSort(candidatos1000, (a, b) => a.NM_URNA_CANDIDATO.localeCompare(b.NM_URNA_CANDIDATO, 'pt-BR') > 0)
    console.timeEnd('Teste candidatos 1000')

    console.log(candidatos1000)
*/