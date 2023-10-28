const url = 'http://localhost:1502'

const getUsers = function() {
    fetch(`${url}/buscar`)
    .then(res => res.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(err => console.error(err))
}

const getUser = function(id) {
    fetch(`${url}/buscar/${id}`)
    .then(res => res.json())
    .then(data => {
        userName.textContent = JSON.stringify(data.nome)
        userCity.textContent = JSON.stringify(data.cidade)
        userAge.textContent = JSON.stringify(data.age)
    })
    .catch(err => console.error(err))
}

const addUser = function(newUser) {
    fetch(`${url}/newUser`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => {
        return alertApi.textContent = data
    })
    .catch(err => console.error(err))
}

const updateUser = function(upUser, id) {
    fetch(`${url}/buscar/${id}`, {
        method: 'PUT',
        body: JSON.stringify(upUser),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        } 
    })
    .then(res => res.json())
    .then(data => {
        alertApi.textContent = data
    })
    .catch(err => console.error(err))
}

const removeUser = function(id) {
    fetch(`${url}/buscar/${id}`, {
        method: 'DELETE',
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => {
        return alertApi.textContent = data
    })
    .catch(err => console.error(err))
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
getUser(1)
//addUser(newUser)
updateUser(upUser, 1)
//removeUser(1)