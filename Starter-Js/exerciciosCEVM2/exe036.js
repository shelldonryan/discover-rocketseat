/*
    Escreva um programa para aprovar o empréstimo bancário para a compra de uma casa.
    O programa vai perguntar o valor da casa, o salário do comprador e em quantos anos
    ele vai pagar

    Calcule o valor da prestação mensal, sabendo que ela não pode exceder 30% do salário ou
    então o empréstimo será negado
 */

let houseValue = parseFloat(prompt("Qual o valor da sua casa: "))
let buyerSalary = parseFloat(prompt("Qual o seu salário mensal: "))
let paymentTime = parseInt(prompt("Qual o tempo de pagamento: "))
let pamentTimeMonthly = paymentTime * 12

let monthlyRate = houseValue / (paymentTime * 12)
let thirtyPerCentSalary = buyerSalary * 0.3

console.log(`Informações Serviço: Empréstimo`)
console.log(`Prestação: R$ ${monthlyRate.toFixed(2)}`)
console.log(`Tempo de Pagamento: ${pamentTimeMonthly} meses`)
console.log(`30% do Salário: R$ ${thirtyPerCentSalary.toFixed(2)}`)

if(monthlyRate > thirtyPerCentSalary) {
    console.log("O banco não permite o empréstimo para essa compra")
} else{
    console.log("Empréstimo concedido")
}

