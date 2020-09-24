//IMPORTANTE NÃO DA PARA FAZER COMPARAÇÃO ENTRE DOIS OBJETOS
//USANDO O FNCOMP, DEIXA O ALGORITIMO GENÉRICO, OU SEJA, A COMPARAÇÃO
//NÃO É FEITA DENTRO DO ALGORITIMO E SIM PELA FUNÇÃO, ISSO POSSIBILITA
//QUE O MESMO CÓDIGO POSSO COMPARAR VARIOS ELEMENTOS DO OBJETO, BASTA
//APENAS QUE VC MUDE O OBJETO DE PESQUISA, E QUE DEFINE QUAL É O ELEMENTO
//MAIOR E O MENOR É A FUNÇÃO, POIS NÃO PASSAMOS OPERADOR DE COMPARAÇÃO
/* 
    Função de comparação fnComp
    - Recebe dois valores para comparação
    - Retorno:
        - true se o PRIMEIRO valor for MAIOR que o segundo
        - false caso contrário

    A comparação fnComp geralmente tem suas chamadas nos if
    elemento que proporciona a comparação de valore
    A comparação não ocorre dentro do algoritimo e sim da função
*/

function selectionSort(vetor, fnComp) {
    let passadas = 0, comparacoes = 0, totalTocas = 0
    
    //Função que encontra o menor valor em um segmento de vetor (subvetor)
    // A função deve retornar A POSIÇÃO  do menor valor encontrado
    function encontrarMenor(vetor, inicio) {
        let posicao = inicio //POSIÇÃO = MENOR VALOR DO VETOR
        for(let i = inicio + 1; i < vetor.length; i++) {
            //if(vetor[i] < vetor[posicao]) posicao = i 
            // Como na chamada da função o retorno se da pelo primeiro elemento ser maior
            // podemos solucionar de duas maneiras; 
            // Ou invertendo a posição do veto[i] com o vetor[posicao] - que serve para buscar 
            //a posição do menor elemeto, ou usa-se o not (!)
            if(! fnComp(vetor[i], vetor[posicao])) posicao = i
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
        //if(vetor[posicao] < vetor[i]) { 
        //quando tem função usa virgula tira o operador de comparação
        if(fnComp(vetor[i], vetor[posicao])) {// Ordem dos argumentos invertida
            // Permuta de valores usando desestruturação
            [vetor[posicao], vetor[i]] = [vetor[i], vetor[posicao]]
            totalTocas++
        }
    }
    console.log({passadas, comparacoes, totalTocas})
}

// Para trocar o nome de todas as variaveis, vc clica em cima dela e aperta f2
let candidatos = require('./dados/candidatos-2018')
console.time('Teste candidatos')
//Quando temos a chamada de função é necessário passar os parametros (nomes quaisquer)
//comparando com o parametro escolhido no objeto
selectionSort(candidatos, (x, y) => x.NM_CANDIDATO > y.NM_CANDIDATO)
// Passando os parametro dessa maneira ordena de A-Z, se inverter o sinal fica Z-A
console.timeEnd('Teste candidatos')
// Medindo a memória utilizada pelo programa
let memoria = process.memoryUsage().heapUsed / 1024 / 1024 // gera memória em kb, dividindo pelo 1024 2* chega em mg
console.log(candidatos)
console.log('Memória utilizada (MB):', memoria)

//ajuda a saber se o dispositivo tem memória sufiente para executar algoritimo
// nesse caso usar um algoritimo mais lento pode resolver