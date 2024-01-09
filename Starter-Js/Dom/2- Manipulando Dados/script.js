// manipulando dados

//textContent

const element = document.querySelector('h1')

element.textContent = 'Hello World'

const element2 = document.querySelector('h2')

element2.textContent += ' Hello World 2'

//innerText

const element3 = document.querySelector('h1')

element3.innerText = 'Hello Devs'

//innerHTML

const element4 = document.querySelector('h2')

element4.innerHTML = 'Hello Devs 2. <small>@@@</small>'

//value

const element5 = document.querySelector('input')

console.log(element5.value)
element5.value = 'Beba água.'

// atributos

const header = document.querySelector('header')

header.setAttribute('id', 'title')

const headerID =document.querySelector('#title')

console.log(headerID)
console.log(headerID.getAttribute('id'))

