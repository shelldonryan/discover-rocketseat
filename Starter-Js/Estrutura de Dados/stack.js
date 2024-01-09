// Passo 1: Modelagem

class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }
    // push é responsável por adicionar um dado a pilha
    push(key) {
        this.top++
        this.data[this.top] = key
        return this.data
    }
    // pop é responsavel por remover da pilha
    pop() {
        if (this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop 
    }
    // Obter o elemento do topo da pilha    
    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
    // Obter o tamanho da pilha
    size() {
        return this.top >= 0 ? this.top + 1 : undefined
    }
}

// Passo 2: Utilização

const stack = new Stack()

// Passo 3: Adicionar Dados

stack.push('Shelldon')
stack.push('Shirlley')
stack.push('Dimas')
console.log(stack.push('Cirleide'))

console.log(stack.peek())

stack.pop()
console.log(stack.pop())
console.log(stack.push('Brocolis'))

console.log(stack.peek())

console.log(stack.size())