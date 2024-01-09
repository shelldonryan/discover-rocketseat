/*
    Desenvolva uma lógica que leia o peso e a altura de uma pessoa, calcule seu IMC
    e mostre se status, de acordo com a tabela abaixo:

    -Abaixo de 18.5: Abaixo do Peso
    -Entre 18.5 e 25: Peso Ideal
    -25 até 30: Sobrepeso
    -30 até 40: Obesidade
    -Acima de 40: Obesidade Mórbida
*/

let weight = parseFloat(prompt("Digite a sua massa corpórea"))
let height = parseFloat(prompt("Digite sua altura"))

let imc = weight / (height ** 2)
alert(`IMC: ${imc.toFixed(2)}`)

if (imc < 18.5){
    alert("Abaixo do peso")
}else if (imc >= 18.5 && imc <= 25){
    alert("Peso Ideal")
}else if (imc > 25 && imc <= 30){
    alert("Sobrepeso")
}else if (imc > 30 && imc <= 40){
    alert("Obesidade")
}else{
    alert("Obesidade Mórbida")
}