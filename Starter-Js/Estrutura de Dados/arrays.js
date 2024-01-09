const players = ['Neymar', 'Vini Jr', 'Rodrigo', 'Gabriel Barbosa'];

// a indexação começa pelo número 0
console.log(players[0])
console.log(players[3])

// acessar o tamanho da array
console.log(players.length)

// adicionar elementos
players.push('Arrascaeta')

// deletar um elemento 
players.splice(2, 1)

//iterável
for (let player of players) {
    console.log(player)
}

// Encontrar um elemento
const findPlayer = players.find(player => player === 'Shelldon')
console.log(findPlayer)
