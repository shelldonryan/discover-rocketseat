const url = 'http://localhost:5500/api'

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(err => console.error(err))
}

function getUser() {
    fetch(`${url}/2`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = JSON.stringify(data.name)
        userCity.textContent = JSON.stringify(data.city)
        userAvatar.src = data.avatar
    })
    .catch(err => console.error(err))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        return alertApi.textContent = data
    })
    .catch(err => console.error(err))
}

// o segundo argumetno do fetch pode ter mais variações, qualquer precisão devemos consultar a documentação do mesmo
function updateUser(upUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(upUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        return alertApi.textContent = data
    })
    .catch(err => console.error(err))

}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        } 
    })
    .then(response => response.json())
    .then(data => {
        return alertApi.textContent = data
    })
    .catch(err => console.error(err))
}

const newUser = {
    "name": "Shelldon Ryan",
    "city": "Sousa",
    "avatar": "https://avatars.githubusercontent.com/u/128086279?v=4"
}

const updatedUser = {
    "name": "Douglas Henrique",
    "city": "Cajazeiras",
    "avatar": "https://images.pexels.com/photos/6946663/pexels-photo-6946663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}



getUsers()
getUser()
//addUser(newUser)
//updateUser(updatedUser, 1)
deleteUser(3)