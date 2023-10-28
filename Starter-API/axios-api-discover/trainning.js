const url = 'http://localhost:1502'

function getUsers() {
    axios.get(`${url}/buscar`)
    .then(res => {
        const users = res.data
        console.log(users)
        apiResult.textContent = JSON.stringify(users)
    })
    .catch(err => console.err(err))
}

function getUser(id) {
    axios.get(`${url}/buscar/${id}`)
    .then(res => {
        const data = res.data
        userName.textContent = data.nome
        userId.textContent = data.id
        userAge.textContent = data.age
        userCity.textContent = data.cidade
    })
    .catch(err => console.log(err.message))
}

function addUser(newUser) {
    axios.post(`${url}/newUser`, newUser)
    .then(res => console.log(res))
    .catch(err => console.log(err.message))
}

function updateUser(upUser, id) {
    axios.put(`${url}/buscar/${id}`, upUser)
    .then(res => console.log(res))
    .catch(err => console.log(err.message))
}

function deleteUser(id) {
    axios.delete(`${url}/buscar/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err.message))
}

const newUser = {
    "nome": "João Victor de Alencar",
    "age": '23',
    "cidade": "Ipalmirin"
}

const upUser = {
    "nome": "Ryan Shelldon",
    "age": "18",
    "cidade": "Cajazeiras"
}




getUsers()
//getUser(2)
//addUser(newUser)
//updateUser(upUser, 2)
//deleteUser(4)