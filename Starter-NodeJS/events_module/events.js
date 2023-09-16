const {EventEmitter} = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (name) => {
    console.log('Eu ouvi você, ' + name + '\n')
})

ev.emit('saySomething', ("João"))
ev.emit('saySomething', ("Geraldo"))
ev.emit('saySomething', ("Camilla"))