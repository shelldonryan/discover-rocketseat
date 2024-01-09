Esse módulo é dedicado à programação no HTML. Por meio do EJS, é póssível entender como o Js constrói o HTML com NodeJS e Express.

EJS é basicamente uma linguagem de modelagem para criar páginas html com Js. Ou seja criamos nosso front-end com html através do runtime NodeJS, com tudo isso sendo renderizado pelo javascript graças ao EJS.

## Criando o HTML

    ```html
    <!DOCTYPE html>
        <head>
            <title>Construindo com EJS</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
            <style>
                body {
                    padding-top: 50px;
                }
            </style>
        </head>

        <body class="container">
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="file:///C:/Users/dimas/OneDrive/Documentos/Starter-NodeJS/ndoeJS+EJS/index.html">EJS</a>
                </nav>
            </header>

            <main>
                <div class="jumbotron display-4 lead my-4 btn btn-lg jumbotron-fluid">
                    <h1>Node com EJS</h1>
                    <p>Vamos aprender a trabalhar com arquivos EJS</p>
                </div>
            </main>

            <footer>
                <p class="text-center text-muted">Só o ouro, by Shelldon Ryan</p>
            </footer>
        </body>
    </html>
    ```

## Criando o Servidor

    Inicialmente temos que transformar esse html em ejs, e dar um `npm install ejs` e `npm install express` . A partir disso podemos criar um arquivo js e dar um require(’express’).

    O express cria um servidor Para poder exibir o nosso arquivo.ejs dentro do browser.

    Devemos também instanciar a função express colocando-a dentro de uma variável

    ```jsx
    const express = require('express');
    const app = express();
    ```

    Devemos utilzar agora dois métodos da função express, o `set` e o `get`.

    o primeiro serve para falar com qual mecanismo de visualização estamos trabalhando.

    O segundo serve para falarmos o que, ao ser chamado, será renderizado.

    ```jsx
    const express = require('express');
    const app = express();

    app.set('view engine', 'ejs');
    app.get('/', (req, res) => {
        res.render('index');
    })
    ```

    Para fazer rodar temos que usar o método `listen(alpha)` e com isso poderemos rodar o arquivo.ejs. Lembrando que esse arquivo tem que está dentro de uma pasta chamada views e temos que por no browser `localhost:alpha` .

    Podemos também graças ao EJS separar o nosso corpo do documento em partes, colocando cada parte em um arquivo e utilizando uma sintaxe do EJS para pode-los inserir no nosso EJS.

    ```html
    <!DOCTYPE html>

        <%- include('head'); %>

        <body class="container">

            <%- include('header'); %>

            <main>
                <div class="jumbotron text-center display-4 lead my-4 btn btn-lg jumbotron-fluid">
                    <h1>Node com EJS</h1>
                    <p>Vamos aprender a trabalhar com arquivos EJS</p>
                </div>
            </main>

            <%- include('footer'); %>

        </body>
    </html>
    ```

<aside>
💡 Lembrando que para modificar o EJS não precisamos parar o servidor, porém para modificarmos o Js precisamos para o servidor.
</aside>

## Passando um objeito para o EJS

    Basicamente na sintaxe do EJS é possível dentro do include passar um objeto da seguinte forma:

    ```jsx
    // Isso aqui é o que terá nas pages da nossa aplicação
    <%- include('../partials/header', {page: 'Home'}); %>

    // Isso aqui é o que terá na partial que estiver sendo colocado o objeto
    <li><%- page %></li>
    ```

    Há também como definir um objeto default, ou seja, caso o objeto não esteja no includes, será mostrado um padrão que já está predefinido.

    ```jsx
    <li><%= typeof page != 'undefined' ? page: 'Home'  %></li>
    // Caso a page não tenha o objeto page, o padrão a ser mostrado será o page: 'home'
    ```

Foreach

    basicamente é um método que funciona como um loop, ou seja, ele passa por cada objeto por dentro de uma array, e executa uma função qualquer para cada objeto que ele assumir, naquele loop.

    No caso lá no server.js é criado uma variável que armazena essa array de objects, e no método `express().get`, dentro do `res.render`, colocamos um objetvo, e essa variável sendo o valor de uma propriedade x.