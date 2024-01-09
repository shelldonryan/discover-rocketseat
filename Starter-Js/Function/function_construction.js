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
const ryan = new Person("Ryan")
console.log(shelldon.walk())
console.log(ryan.walk())
console.log(shelldon)
console.log(ryan)