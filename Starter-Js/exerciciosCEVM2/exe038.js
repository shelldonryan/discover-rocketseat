// Escreva um programa que leia dois números inteiros e comopare-os, mostrando na tela
//     uma mensagem:
//     - O primeiro valor é maior
//     - O segundo valor é maior
//     - Não existe valor maior, os dois são iguais

let num1 = parseInt(prompt("Digite 1 número"))
let num2 = parseInt(prompt("Digite outro número"))

if (num1 > num2) {
    alert("O Primeiro valor é maior")
} else if (num1 < num2) {
    alert("O Segundo valor é maior")
} else {
    alert("Não existe valor maior, os dois são iguais")
}