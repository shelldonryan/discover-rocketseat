// Exemplo em Js
const cart = {
    quantity: 2,
    total: 200
}

// bad

cart.quantity = 3

// good

const newCart = {
    ...cart,
    quantity: 3
}

