// Faça um programa que leia o ano de nascimento de um jovem e informe, de acordo
//     com sua idade:

//     - Se ele ainda vai se alistar ao serviço militar
//     - se é a hora de se alistar
//     - Se já passou do tempo do alistamento

//     seu programa também deverá mostrar o tempo que falta ou que passou do prazo

let yearYoung = parseInt(prompt("Digite seu ano de nascimento"))
let ageYoung = 2024 - yearYoung

if (ageYoung == 18) {
    alert("já chegou a hora de se alistar")
} else if (ageYoung < 18) {
    let period = 18 - ageYoung 
    alert(`Você ainda irá se alistar\nfaltam ${period} ${(period == 1) ? 'ano' : 'anos'}`)
} else {
    let latedeadline = ageYoung - 18
    alert(`Você está atrasado em seu alistamento\nJá passaram ${latedeadline} ${(latedeadline == 1) ? 'ano' : 'anos'}`)
}