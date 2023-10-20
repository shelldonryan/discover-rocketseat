function imprimirDados(dado) {
	console.log('Executar primeiro essa tarefa')
	console.log(dado())
}

imprimirDados(() => {
    return 'depois o Callback vai retornar com essa função'
})

function jogadorDeFutebol(chutar) {
	console.log('Primeiro domina a bola')
	chutar()
}

jogadorDeFutebol(() => console.log('Chuta a bola em direção ao gol'))