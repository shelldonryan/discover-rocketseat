/*
    Reforça o exe 035 dos triângulos, acrescentando o recurso de mostrar que tipo
    de triângulo será formado:

    Equilátero: todos os lados iguais
    Isósceles: Dois lados iguais
    Escaleno: Todos os lados Diferentes
*/

function conditionExist(r1, r2, r3) {
    if (r1 < (r2 + r3) && r2 < (r1 + r3) && r3 < (r1 + r3)) {
        alert("esse triângulo existe!")
        if (r1 == r2 == r3) {
            alert("Esse triângulo é Equilátero")
        } else if (r1 == r2 || r1 == r3 || r2 == r3) {
            alert("Esse triângulo é Isósceles")
        } else {
            alert("Esse triângulo é Escaleno")
        }
    } else {
        alert("Esse triângulo não existe!")
    }
}

let reta1 = parseInt(prompt("Digite o valor da primeira reta"))
let reta2 = parseInt(prompt("Digite o valor da segunda reta"))
let reta3 = parseInt(prompt("Digite o valor da terceira reta"))

conditionExist(reta1, reta2, reta3)