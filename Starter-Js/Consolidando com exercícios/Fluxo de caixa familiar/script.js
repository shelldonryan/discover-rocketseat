let family = {
    incomes: [2000.54, 1360.52],
    expenses: [500.32, 360.52]
}

function su(array) {
    let total

    for (let valor in array) {
        total += valor
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses
    
    const itsOk = total > 0

    let balanceText

    if(itsOk) {
        balanceText = "positivo"
    } else if(total === 0) {
        balanceText = "zerado"
    } else {
        balanceText = "negativo"
    }

    console.log(`    Seu saldo está ${balanceText}
    total: R$ ${total.toFixed(2)}
    `)
}

calculateBalance()