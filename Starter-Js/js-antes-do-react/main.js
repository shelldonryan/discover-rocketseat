// 1. Nullish Coalescing Operator

const age1 = null;

document.body.innerText = 'Your age is: ' + (age1 ?? 'Anything input');

// 2. Objects

const user = {
  name: 'Shelldon',
  age: 17,
  address: {
    street: 'Rua B',
    number: 82,
  },
};

// seleciona as chaves dentro de um objeto
document.body.innerText = Object.keys(user);

// seleciona os valores dentro de um objeto
document.body.innerText = Object.values(user);

// Retorna uma array com outros vetores dentro, contendo key & value nesses subvetores
document.body.innerText = JSON.stringify(Object.entries(user));

// 3. Desestruturação

/*const { adress, name, age: idade, nickname = 'Fernandez' } = user;

document.body.innerText = JSON.stringify({ name, adress, idade, nickname }); */

// 4. Rest Operator

const { age, ...rest } = user;

document.body.innerText = JSON.stringify(rest);

// 5. Short Syntax

const sexo = 'masculino';
const demencia = true;

const pipipopo = {
  sexo,
  demencia,
};

// 6. Optional Chaining

const user2 = {
  name2: 'Ryan',
  age2: 18,
  address2: {
    street2: 'Rua A',
    number2: 34,
    zip: {
      code: 58804675,
      capital: 'Rio de Janeiro',
    }
  },
  itsVeryGood() {
    return 'ok';
  }
};

const key = 'code';

document.body.innerText = user2.address2?.street2 ?? 'Not Input';
document.body.innerText = user2.itsVeryGood?.() ?? 'Not Input';

document.body.innerText = user2.address2?.zip?.[key] ?? 'Not Input';

// 7. Métodos de Array

// 7.1 Map( )
const array = [1, 2, 3, 4, 5]

const newArray = array.map(item => {
  return item *2;
})

document.body.innerText = JSON.stringify(newArray)
// 7.2 Filter( )
const array2 = [1, 60, 3, 4, 5]

const newArray2 = array.map(item => {
  return item * 2;
}).filter(item => item % 3 === 0)

document.body.innerText = JSON.stringify(newArray2)

// 7.3 Every( )
const array3 = [1, 2, true, 4, 5, 'string']

const everyTypeNumbers = array3.every(item => typeof item === 'number')

document.body.innerText = JSON.stringify(everyTypeNumbers)

// 7.4 Some( )
const someTypeString = array3.some(item => typeof item === 'boolean')

document.body.innerText = JSON.stringify(someTypeString)

// 7.5 Find( ) & FindIndex( )
const even = array2.find(item => item % 2 === 0 ?? "Undefined Value")
const evenIndex = array2.findIndex(item => item % 2 === 0 ?? "Undefined Value")

const findNumber = {
  even,
  evenIndex
}

document.body.innerText = JSON.stringify(Object.entries(findNumber))

// 7.6 Reduce( )
const multiplication = array.reduce((acc, item) => {
  return item + acc
}, 0)

console.log(multiplication)

// 8. Template Literals
const nameMessage = 'Shelldon Ryan'
const message = `My nam is ${nameMessage}`
console.log(message)