// Passo 1: Modelando
class Queue {
    constructor() {
        this.data = new Array();
    }
    // Adiciona um elemento ao final da fila
    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }
    // Remove o primeiro elemento a entrar an fila
    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu na fila!`)
    }
}
// Passo 2: Utilizando
const queue = new Queue();

// Passo 3: Adicionando Dados

queue.enqueue('Shelldon')
queue.enqueue('Ryan')
queue.enqueue('Sarmento')
queue.enqueue('Oliveira')
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()