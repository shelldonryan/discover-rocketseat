// alterando o estilo
const element = document.querySelector('body')

element.style.backgroundColor = "hsla(90, 98%, 60%, 0.5)"


//classList
    
const element2 = document.querySelector('header')

element2.classList.add('active')
console.log(element2.classList)
element2.classList.remove('active')
element2.classList.toggle('active')

const element3 = document.querySelector('main')

element3.classList.add('green')
console.log(element3.classList)
element3.classList.remove('green')
element3.classList.toggle('green')