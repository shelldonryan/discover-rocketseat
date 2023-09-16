//Encadeamento, maneira mais complicada

fetch('https://api.github.com/users/shelldonryan')
.then(response => {
    response.json()
    .then(date => {
        fetch(date.repos_url)
        .then(data => data.json() .then(dataRepo => console.log(dataRepo)))
    })
})

//Encadeamento, maneira mais simples
fetch('https://api.github.com/users/shelldonryan')
.then(response => response.json())
.then(date => fetch(date.repos_url))
.then(data => data.json())
.then(dataRepo => console.log(dataRepo))
