/*
    Deque = Double-Ended Queue (fila de duas pontas)
    Permite inserções e remoções em qualquer um dos seus lados
*/

module.exports = class Deque {
    constructor() {
        this.data = []
    }

    // insere no inicio da fila
    insertFront(value) { 
        this.data.unshift(value)
    }

    // insere no fim da fila
    insertRear(value) {
        this.data.push(value)
    }

    // Remoçaõ no início
    removeFront() {
        return this.data.shift()
    }

    // Remoção do fim
    removeRear() {
        return this.data.pop()
    }

    // "Olhadinha" no início
    peekFront() {
        return this.data[0]
    }

    // "Olhadinha" no final
    peekRear() {
        return this.data[this.data.length - 1]
    }

    size() {
        return this.data.length
    }
}
