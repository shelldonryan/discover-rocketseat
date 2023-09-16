let family = {
    incomes: [2000.54, 1360.52],
    expenses: [500.32, 360.52]
}

function sum(array) {
    let total = 0

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses
    
    const itsOk = total > 0

    let balanceText = "negativo"
    if(itsOk) {
        balanceText = "positivo"
    }

    console.log(`    Seu saldo está ${balanceText}
    total: R$ ${total.toFixed(2)}
    `)
}

calculateBalance()