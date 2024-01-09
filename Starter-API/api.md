- Introdução
    
    Application Programming Interface, é um conjunto de regras e protocolos que permite que diferentes softwares se comuniquem e interajam entre si.
    
    Em outras palavras, é uma forma de permitir que aplicativos e serviços compartilhem informações e funcionalidades de maneira padronizada e organizada.
    
    são como pontes que conectam diferentes sistemas e fazem transações de informações.
    
    > Imagine uma API como um "garçom" que recebe pedidos (solicitações) dos clientes (aplicativos) e encaminha esses pedidos à cozinha (serviço) para que o prato desejado (dados ou funcionalidades) seja preparado e entregue de volta ao cliente.
    > 
    
    Vantagens de usar APIs:
    
    - Reutilização: Você não precisa desenvolver toda a lógica para obter e processar os dados, pois a API já fornece essa funcionalidade.
    - Atualizações em tempo real: Como a API acessa dados em tempo real, seu aplicativo sempre mostrará informações atualizadas.
    - Segurança: A API pode ser projetada para permitir apenas o acesso a determinados dados ou funcionalidades, garantindo a segurança das informações.
    - Escalabilidade: Se o serviço otimiza sua API para lidar com um grande número de solicitações, seu aplicativo pode crescer sem problemas.
    
    Json é um arquivo leve usado para troca de informações e dados. Usado em qualquer linguagem, fácil entendimento tanto para humanos como para sistemas
    
    ```json
    {
    	"nome": "Shelldon Ryan"
    	"Chave ou Propriedade": "Valor"
    }
    ```
    
- API no Back-End
    
    Inicialmente criamos o nosso projeto em node, no caso criando um diretório e dando um `npm init -y` para poder criar o package.json. Iremos utilizar também o framework express que serve para desenvolvimento de aplicações web em Node.js. 
    
    Ele é amplamente utilizado para criar servidores web robustos, flexíveis e escaláveis, sendo uma das opções mais populares para criação de APIs e aplicações web do lado do servidor. O Express.js oferece um sistema de roteamento que permite definir endpoints para diferentes URLs e métodos HTTP (como GET, POST, PUT, DELETE, etc.). Isso permite que você defina como a aplicação responderá a diferentes solicitações. Com o Express.js, é simples criar uma API RESTful para interagir com aplicativos cliente, seja um aplicativo web ou um aplicativo móvel.
    
    Inicialmente devemos criar um arquivo, iniciar o nosso express, e usar o método listen, para que ele fique atento a porta desejada caso seja requerida pelo browser. geralmente usamos `express().listen('nº da porta')` 
    
    Por padrão nosso navegador sempre usa o método GET, no caso, devemos então criar uma rota GET no nosso back-end para que possamos enviar como response para o browser. 
    
    GET
    
    ```jsx
    app.route('/').get( (req, res) => {
        res.send('Olá mundo')
    })
    
    app.get('/sobre', (req, res) => res.send('Olá mundo, aqui é a rota sobre'))
    ```
    
    POST
    
    ```jsx
    app.use(express.json())
    
    app.route('/').post( (req, res) => {
        console.log(req.body)
    		res.send(req.body)
    })
    
    app.post('/sobre', (req, res) => console.log(req.body))
    ```
    
    PUT
    
    ```jsx
    app.use(express.json()) //middleware
    
    let name = "ryan shelldon"
    
    app.route('/').put( (req, res) => {
        name = req.body.name
        res.send(name)
    })
    ```
    
    DELETE
    
    ```jsx
    let name = "shelldon" 
    app.route('/:identificador').delete( (req, res) => {
        author = ''
        res.send(req.params.identificador)
    })
    ```
    
- Parâmetros nas requisições
    
    São formas de passar para dentro do nosso código informações que não estavam lá antes.
    
    Body Params
    
    É uma forma de enviar informações para a API e essas informações não ficaram na URL. Sendo enviadas de forma escondida
    
    ```jsx
    const express = require('express')
    const app = express()
    
    app.listen('1502')
    
    app.use(express.json())
    
    app.route('/').post( (req, res) => {
        let {nome, estado, cidade} = req.body
        res.send(`Meu nome é ${nome}, e eu moro em ${cidade} no estado da ${estado}!`)
    })
    ```
    
    Route Params
    
    Basicamente será passados parâmetros via rota. Esse `/:nome` tem a função de criar a variável, que ao colocarmos no browser irá sempre receber algum valor para armazenar nela.
    
    ```jsx
    const express = require('express')
    const app = express()
    
    app.listen('1502')
    
    app.route('/:nome').get( (req, res) => res.send(req.params.nome))
    ```
    
    Query Params
    
    Esse tem a função de passar parâmetros pela própria URL. São idenntificados na URL via   ou tbm 
    
    ```jsx
    // localhost:1502/?nome=shelldon
    app.route('/').get( (req, res) => {
        res.send(req.query)
    })
    
    // localhost:1502/?nome=shelldon&cidade=sousa
    app.route('/').get( (req, res) => {
        res.send(req.query.nome)
    })
    
    // localhost:1502/about/user?nome=shelldon%20ryan&cidade=rio%20de%20janeiro
    app.route('/about/user').get( (req, res) => {
        res.send(req.query)
    })
    ```
    
- Consumindo API com NodeJS
    
    ```jsx
    const express = require('express')
    const app = express()
    const axios = require('axios')
    
    app.listen('1502')
    
    app.route('/').get( (req, res) => {
        axios.get('https://api.github.com/users/shelldonryan')
        .then( response => res.send(`<img src='${response.data.avatar_url}'></img>`))
        .catch( (err) => console.log(err.message) );
    })
    ```
    
- API no Fornt-End com Fetch
    
    Fetch é uma interface JavaScript para acessar e manipular partes do pipeline HTTP, ou seja, podemos passar uma URL para o fetch e ele retorna a response dessa URL no nosso código.
    
    ```
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
    addUser(newUser)
    updateUser(updatedUser, 1)
    deleteUser(3)
    ```
    
- API no Fornt-End com Axios
    
    Uma ferramenta para podermos fazer request em APIs, chamando-o para nosso projeto, dando o get e através de promise podemos trazer esses dados, já que ele é baseado em promises.
    
    ```jsx
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
    ```
    
- F