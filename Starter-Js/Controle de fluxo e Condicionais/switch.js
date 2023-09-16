/* Switch */

let name = 'Second Name'

switch (name) {
    case 'First Name':
        // código
        console.log('Shelldon')
        break
    case 'Second Name' :
        // código
        console.log('Ryan')
        break
    default:
        console.log('não definido')
        break
}

function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(10, '*', 8))