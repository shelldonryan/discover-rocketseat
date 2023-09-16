// operador condicional (ternário)
// dependendo da condição, nós recebemos valores diferentes

// Condição entre valor 1, se não, valor 2
// condition ? value1 : value 2

// Example 1 : Breakfast
let bread = true
let cheese = true

const niceBreakfast = bread && cheese ? 'Amazing breakfast' : 'Breakfast really bad'

console.log(niceBreakfast)

// Example 2 : Age
const agee = 19
const canDrive = agee >= 18 ? 'Can Drive' : "Can't Drive"

console.log(canDrive)
