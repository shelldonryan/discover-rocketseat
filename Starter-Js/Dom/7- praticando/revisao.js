/* const div = document.querySelector('div')
const button = document.querySelector('button')

button.addEventListener('click', enter)

function enter() {
    div.classList.remove('invisible')
}

div.onkeypress = add

function add() {
    div.classList.toggle('Invisible')
} */

// other way 
const openModalButton = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

openModalButton.onclick = function() {
    modalWrapper.classList.remove('Invisible')
}

var condition = true


if (condition == true) {
    var condition2 = true
    document.addEventListener('keyup', function(event) {
        const isKeyf = event.key === 'f'
    
        if (isKeyf) {
            console.log('rodou')
            modalWrapper.classList.remove('invisible')
        }
    })
} 

if (condition2) {
    document.addEventListener('keyup', function(event) {
        console.log(event)
        const isEscKey = event.key === 'Escape'
        
    
        if (isEscKey) {
            console.log('rodou')
            modalWrapper.classList.add('invisible')
        }
    })
}



