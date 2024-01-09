const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(res => {
        const users = res.data
        apiResult.textContent = JSON.stringify(users)
    })
    .catch(err => console.error(err))
}

function addUsers() {
    axios.post(url, {
        name: "Tawan de Sousa",
        city: "Ipalmirima",
        avatar: "https://images.pexels.com/photos/17142502/pexels-photo-17142502/free-photo-of-abstrato-resumo-abstrair-arquitetura.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => console.error(err))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(res => {
        const data = res.data
        userName.textContent = data.name
        userId.textContent = data.id
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(err => console.error(err))
}

function updateUser(id, bodyNewUser) {
    axios.put(`${url}/${id}`, bodyNewUser)
    .then(res => {
        console.log(res)
    })
    .catch(err => console.error(err))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(res => console.log(res))
    .catch(err => console.error(err))
}

const updatedUser = {
    name: "João Pedro",
    city: "Aparecida",
    avatar: "https://images.pexels.com/photos/6284710/pexels-photo-6284710.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
}

getUsers()
getUser(1)
//updateUser(4, updatedUser)
deleteUser(6)
//addUsers()
