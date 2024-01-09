/*
    A confederação Nacional de natação precisa de um programa que leia o ano de
    nascimetno de um atleta e mostre sua categoria de acordo com a idade:

     até 9 anos: Mirim
     até 14 anos: Infantil
     até 19 anos: Junior
     até 20 anos: Sênior
     Acima: Master
*/

let yearBorn = parseInt(prompt("Digite o ano de nascimento do atleta"))
let ageAthlete = 2024 - yearBorn

if (ageAthlete > 1 && ageAthlete <= 9) {
    alert("Atleta Mirim")
} else if (ageAthlete <= 14) {
    alert("Atleta Infantil")
} else if (ageAthlete <= 19) {
    alert("Atleta Junior")
} else if (ageAthlete <= 20) {
    alert("Atleta Sênior")
} else if (ageAthlete > 20) {
    alert("Atleta Master")
} else {
    alert("Algo deu errado")
}