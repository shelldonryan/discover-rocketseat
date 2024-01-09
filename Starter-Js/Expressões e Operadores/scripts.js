let number = 1
//binário
console.log(number + 1)
//unário
console.log(--number)
//ternário
console.log(false ? 'alo' : 'nada')

//new expression
let date = new Date('2023-02-15')
console.log(date.__proto__)

let name = new String('Shelldon')
name.surName = 'Oliveira'
let age = new Number(17)
console.log(name, age)

/* delete */
const person = {
    name: 'Mayk',
    age: 25,
}
delete person.age

console.log(person)

// grouping operator "()"
const total = (2 + 3) * 5
console.log(total)

/*TRUTHY
quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)
true; {}; []; 1; -1; "0"; "false"; 3,23; Infinity; -Infinity; */

console.log(-Infinity ? 'verdadeiro' : 'falso')

/*FAlSY
quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)
false; ""; -0; 0; NaN; null; undefined; */

console.log("" ? "verdadeiro" : 'falso')

// Precedência dos operadores
/* De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= */