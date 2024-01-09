//Função Impura

// exemplo 1 Está dependendo do dado externo que não foi passado como parâmetro
function calculateCircumference(radius) {
    return Math.PI * (radius + radius)
}

// exemplo 2 Está alterando um dado externo

let person = {
    name: 'John',
    age: 'jovem'
}

function changeName(name) {
    person.name = name
}

//Função pura

//Exemplo 1

const calculateCircumference = (pi, radius) => {
    return pi * (radius + radius)
}

//Exemplo 2

const changeName = (person, name) => ({...person, name})
