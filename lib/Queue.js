// module.exports - permite utilizar a  classe dentro de outro elemento
// em português é fila, tem estrutura e é ordenada

/* 
    Estrutura de dados Fila
    Funcionamento: FIFO (First In, First Out)
    (o primeiro que entra é o primeiro que sai)
*/

module.exports = class Queue {
    
    constructor() {
        this.data = []   //Armazenamento
    }

    //Inserção de novos valores; *sempre ao final
    enqueue(value){
        this.data.push(value) //push, coloca no final
    }

    // Remoção de valores
    dequeue() {
        return this.data.shift() //shift, remove do inicio
    }

    // "Olhadinha" (no início da fila), ver quem será o próximo a ser chamadp
    peek() {
        return this.data[0]
    }

    // Tamanho da fila
    size() {
        return this.data.length
    }
}