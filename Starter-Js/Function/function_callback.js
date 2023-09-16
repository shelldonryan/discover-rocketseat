// CallBack Function

function sayMyName(name) {
    console.log('antes de executar uma função')
    name()
    console.log('depois de executar uma função')
}

sayMyName(
() => {
    console.log('executando o callback')
}
)