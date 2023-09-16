function imprimirDados(dado) {
	console.log('Executar primeiro essa tarefa')
	console.log(dado())
}

imprimirDados(() => {
    return 'depois o Callback vai retornar com essa função'
})