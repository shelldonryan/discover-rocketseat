const https = require('node:https')
const api = 'https://jsonplaceholder.typicode.com/users?_limit=2'

console.log('Iniciando Procedimento')

setTimeout(() => console.log('conectando API'), 6000)

https.get(api, res => {console.log(res.statusCode)})
