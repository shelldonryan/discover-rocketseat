// Type coersion - o java tranforma o 'number' em 'string' para rodar o programa

console.log('9' + 5)

// Typecasting - o DEV manualmente modifica isso para rodar o programa

console.log(Number('9') + 5)



// manipulando Strings e números

//Transforma String em número e número em string
const number = 321
console.log(String(number))

const string = "123"
console.log(Number(string))

// contar caractéres e algarismos

const word = "quadrangulamentado"
console.log(word.length)

const numbers = 92847982687
console.log(String(numbers).length)

// transformar um número quebrado com 2 casas decimais e trocar por ponto e virgula

let number3 = 150.15122006
console.log(Number(number3.toFixed(2)))

// transformar letras minusculas em maiusculas. O contrário tbm

let words = 'Programar é muito bom'
console.log(words.toUpperCase())
console.log(words.toLowerCase())

// separar um texto que contém espaços, em um novo array onde cada texto é uma posição do array.

let phrase = 'Eu quero viver um amor!'
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("-")
console.log(phraseWithUnderscore.toLowerCase())

// verificar se um texto tem a palavra 'amor'
let phrases = 'Eu quero viver amor amor!'
console.log(phrases.includes("amor"))

// Manipulando Array

//Criar Array com construtor
let myArray2 = new Array('a', 'b', 'c')
console.log(myArray2)

// contar elementos de uma Array
console.log(['a', 'b', 'c'].length)

// transformar uma cadeia de caractéres em elementos de uma Array
let word3 = "planejamento"
console.log(Array.from(word3))

// sequência de manipulações (Array)

let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("nodeJs")
//adicionar no começo
techs.unshift("sql")
//remover do fim
techs.pop()
//remover do começo
techs.shift()
//pegar somente alguns elementos do Array
console.log(techs.slice(1, 3))
//remover um ou mais items em qualquer posição do Array
techs.splice(1, 1)
//encontrar a posição de um elemento no Array
let index = techs.indexOf('html')
console.log(index)
techs.splice(index, 1)

console.log(techs)