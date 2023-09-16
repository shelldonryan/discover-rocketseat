
let weight
console.log(typeof weight)

let name = "Ryan"
let age = 16
let stars = 3.6
let isSubscribed = true
console.log(name, age, stars, isSubscribed)


let student = {
    name: "Ryan",
    age: 16,
    weight: 59.6,
    isSubscribed: true
}
console.log(`o ${student.name} de idade ${student.age} pesa ${student.weight}kg`)


let students = [
    student
]

console.log(students)

console.log(students[0])


const student2 = {
    name: "Rain",
    age: 17,
    weight: 65.6,
    isSubscribed: true
}
students[1] = student2
console.log(students)