class Polygon {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    get area() {
        return this.#calculateArea()
    }

    #calculateArea() {
        return this.altura * this.largura
    }
}

// criando objeto

const polygon = new Polygon(13, 21);

console.log(polygon.area);