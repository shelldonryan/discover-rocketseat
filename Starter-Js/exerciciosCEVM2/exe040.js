/*
    Crie um programa que leia duas notas de um aluno e calcule sua média,
    mostrando uma mensagem no final, de acordo com a média atingida:

    -Média abaixo de 5.0: reprovado
    -Média  entre 5.0 e 6.9: Recuperação
    -Média 7.0 ou superior: Aprovado
*/

let gradeOne = parseFloat(prompt("Digite sua primeira nota"))
let gradeTwo = parseFloat(prompt("Digite sua segunda nota"))

let media = (gradeTwo + gradeOne) / 2

if (media >= 0 && media <= 5) {
    alert(`Sua média foi ${media.toFixed(2)}\nVocê foi Reprovado!`)
} else if (media < 7) {
    alert(`Sua média foi ${media.toFixed(2)}\nVocê está em Recuperação!`)
} else if (media >= 7 && media <= 10) {
    alert(`Sua média foi ${media.toFixed(2)}\nVocê foi Aprovado!`)
} else {
    alert("Algo deu Errado, digite as notas novamente")
}