// criar e adicionar elementos

//createElement
const div = document.createElement('div');

div.innerHTML = "<strong>Olá Devs!</strong>"

const span = document.createElement('span');

span.innerHTML = "<strong>Olá Devs 2!</strong>"

const main = document.createElement('main');

main.innerHTML = 'Conteúdo principal'

const aside = document.createElement('aside');

main.innerHTML = 'Conteúdo lateral'
//append prepend
const body = document.querySelector('body')
body.append(div)
body.prepend(span)

//insertBefore
const body2 = document.querySelector('body')
const script = body2.querySelector('script')
body2.insertBefore(main, script)

// uma burla como se fosse 'insertAfter'
const header = body2.querySelector('header')
body2.insertBefore(aside, header.nextElementSibling)