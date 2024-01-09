class Parafuso {
    constructor() {
        if (this.constructor === Parafuso)
        throw new Error("Classe abstrata não pode ser instanciada")
    }

    get kindOfKey() {
        throw new Error('Método "kindOfKey" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    constructor() { super() }

     get kindOfKey() {
        return 'Chave de Fenda'
     }
}

class Philips extends Parafuso {
    constructor() { super() }

    get kindOfKey() {
        return 'Chave Philips'
    }
}

class Allen extends Parafuso {}

// criar e usar
new Parafuso()
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.kindOfKey, philips.kindOfKey)
console.log(allen.kindOfKey)
