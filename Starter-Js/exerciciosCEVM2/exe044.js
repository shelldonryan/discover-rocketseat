/*
    Elabore um programa que calcula o valor a ser pago por um produto, considerando
    o seu preço normal e condição de pagamento:

    - à vista dinheiro/cheque: 10% de desconto
    - à vista no cartão: 5% de desconto
    -em até 2x no cartão: preço normal
    - 3x ou mais no cartão: 20% de juros
*/

let productValue = parseFloat(prompt("Digite o valor do produto: "))

alert("1 - Pagamento Dinheiro")
alert("2 - Pagamento cartão")
let wayToPay = parseInt(prompt("Digite a opção de forma de pagamento: "))

if (wayToPay == 1) {
    alert(`Aplicação de 10% de desconto`)
    alert(`Valor do Produto: R$ ${productValue}`)
    alert(`Valor do Desconto: R$ ${productValue * 0.1}`)
    alert(`Valor Final: R$ ${productValue * 0.9}`)
} else if (wayToPay == 2) {
    alert("1 - Á vista")
    alert("2 - 2x")
    alert("3 - 3x")
    let installment = parseInt(prompt("Digite a opção de parcelamento: "))

    if (installment == 1) {
        alert("Aplicação de 5% de desconto")
        alert(`Valor do Produto: R$ ${productValue}`)
        alert(`Valor do Desconto: R$ ${productValue * 0.05}`)
        alert(`Valor Final: R$ ${productValue * 0.95}`)
    } else if (installment == 2) {
        alert(`Valor do Produto: R$ ${productValue}`)
        alert(`Parcela: R$ ${productValue / installment}`)
    } else if (installment == 3) {
        alert("Aplicação de 20% de Juros")
        alert(`Valor do Produto: R$ ${productValue}`)
        alert(`Valor do Juros: R$ ${productValue * 0.2}`)
        alert(`Valor Final: R$ ${productValue * 1.2}`)
        alert(`Parcela: R$ ${round((productValue / installment), 2)}`   )
    } else {
        alert("Opção inválida")
    }
} else {
    alert("Opção inválida")
}