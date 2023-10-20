
// Promessa retorna com sucesso
console.log('pedir uber') 
const promise = new Promise((resolve, reject) => {
	return resolve('carro chegou')
})

console.log('aguardando')

promise.then(result => console.log(result))



// Promessa é rejeitada e usamos o catch() para capturar o erro
console.log('pedir uber') 
const promise2 = new Promise((resolve, reject) => {
	return reject('pedido negado!')
})

console.log('aguardando')

promise2
	.then(result => console.log(result))
	.catch(erro => console.log(erro))


let aceitar = true
console.log('pedir uber') 
const promise3 = new Promise((resolve, reject) => {
	if (aceitar) {
		return resolve('pedido aceito!')
	}

	return reject('pedido negado!')
})

console.log('aguardando')

promise3
	.then(result => console.log(result))
	.catch(erro => console.log(erro))
	.finally(() => console.log('finalizada'))
