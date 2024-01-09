/*
    Escreva um programa que leia um número inteiro qualquer e peça para o usuário
    escolher qual será a base de converção:

    1 -binário
    2 - Octal
    3 - Hexadecimal
*/

let chooseNumber = parseInt(prompt("Digite um número para conversão"))
let chooseBase = parseInt(prompt("Digite uma opção de conversão \n1 - Binário\n2 - Octal\n3 - Hexadecimal"))

if (chooseBase == 1) {
    alert(`${chooseNumber} para binário é ${chooseNumber.toString(2)}`)
} else if (chooseBase == 2) {
    alert(`${chooseNumber} para octal é ${chooseNumber.toString(8)}`)
} else if (chooseBase == 3) {
    alert(`${chooseNumber} para hexadecimal é ${chooseNumber.toString(16)}`)
} else {
    alert("Opção inválida")
}