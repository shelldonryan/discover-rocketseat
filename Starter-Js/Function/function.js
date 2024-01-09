/* Function() constructor

*New expression
*Create a new object
*This keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return `${this.name} está andando`
    }
}

const shelldon = new Person("Shelldon")
const andressa = new Person("Andressa")
console.log(shelldon.walk())
console.log(andressa.walk())
console.log(shelldon)
console.log(andressa)