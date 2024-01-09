class carro {
	rodas = 4;
	
	mover(direction) {}
	virar(direction) {}
}

class moto extends carro {
	constructor() {
		super()  // puxar atributos e métodos do pai
		rodas = 2
    }
}