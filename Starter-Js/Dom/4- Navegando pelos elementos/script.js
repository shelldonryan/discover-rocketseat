/* //parentNode parentElement

const body = document.querySelector('body')

console.log(body.parentNode) */
/* -------------------------------------------- */

//childNodes children
const el = document.querySelector('body')

console.log(el.childNodes)

//firstChild firstElementChild
const header = document.querySelector('body')

console.log(header.firstChild)

// lastChild lastElementChild
const div = document.querySelector('body')

console.log(div.lastElementChild)
/* -------------------------------------------- */

const el2 = document.querySelector('header')
//nextSibling nextElementSibling
console.log(el2.nextElementSibling)

const el3 = document.querySelector('div')
//previousSibling previousElementSibling
console.log(el3.previousElementSibling)