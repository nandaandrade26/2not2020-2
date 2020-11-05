module.exports = class Queue {
    
    constructor() {
        this.data = {}   // Armazenamento
        this.head = 0    // "Cabeça" (início da fila)
        this.tail = -1   // "Cauda" (final da fila) toda vez que esta muito perto do 
        //início fica uma situação absurda, significa que a fila ta vazia
    }

    //Inserção de novos valores; *sempre ao final
    enqueue(value){
        this.tail++
        this.data[this.tail] = value
    }

    // Remoção de valores
    dequeue() {
        let value = this.data[this.head]
        delete this.data[this.head]
        this.head++
        return value
    }

    // "Olhadinha" (no início da fila)
    peek() {
        return this.data[this.head]
    }

    // Tamanho da fila
    size() {
        return this.tail - this.head + 1
    }
}