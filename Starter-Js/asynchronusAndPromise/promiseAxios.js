const axios = require('axios');

axios
    .get('https://api.github.com/users/shelldonryan')
    .then(res => axios.get(res.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(err => console.log(err))


Promise.all([
    axios.get('https://api.github.com/users/shelldonryan'),
    axios.get('https://api.github.com/users/shelldonryan/repos')
])

.then(responses => {
    console.log(responses[0].data.login),
    console.log(responses[1].data.length)
})
.catch(error => console.log(error.message))