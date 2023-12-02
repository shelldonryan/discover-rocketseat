//object

const person = {
    name: "John",
    age: 12,
    weight: 40.5,
    isAdmin: true,
    adress: {
        street: "A",
        number: "123"
    },
    greeting: () => {
        console.log("You're welcome") 
    }
}

console.log(`O ${person.name} tem ${person.age} anos, e seu peso é ${person.weight}`)
person.greeting()