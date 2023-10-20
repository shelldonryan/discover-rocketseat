//async
const promessa = new Promise((resolve, reject) => resolve('ok'))

async function start1(promessa) {
    try {
        const result = await promessa
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Finished')
    }
} 

start1(promessa)

// async/await with fetch

async function start2() {
    try {
        const user = await fetch('https://api.github.com/users/shelldonryan').then(r => r.json())
        const repos = await fetch(user.repos_url).then(r => r.json()) 
        console.log(repos.length)
    } catch(e) {
        console.log(e.message)
    } finally {
        console.log('Finished')
    }
    
}

start2()

// async/await with lib Axios

const axios = require('axios')

async function start3() {
    try {
        const user = await axios.get('https://api.github.com/users/shelldonryan')
        const userRepos = await axios.get(user.data.repos_url)
        console.log(userRepos.data)
    } catch(e) {
        console.log(e.message)
    } finally {
        console.log('Finished')
    }
    
}

start3()