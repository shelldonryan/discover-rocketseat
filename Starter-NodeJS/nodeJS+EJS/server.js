const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const items = [
        {
            title: 'U',
            message: 'so de JavaScript para criar páginas web',
        },
        {
            title: 'F',
            message: 'lexibilidade para incluir partes repetíveis do site',
        },
        {
            title: 'A',
            message: 'lta capacidade de escalabilidade, boa performance e baixo custo',
        },
        {
            title: 'S',
            message: 'intaxe simples e semelhante ao HTML',
        }
    ]
    const subtitle = 'Como criar aplicações web dinâmicas com o framework Express e o template engine EJS'
    res.render('pages/home', {
        subtitle: subtitle,
        qualitys: items,
    });
});

app.get('/sobre', (req, res) => {
    res.render('pages/about')
})

app.listen(1502);

const timeOut = 1000
const checking = () => process.stdout.write("rodando" + "\n")

setTimeout(checking, timeOut)


process.stdin.on('data', data => {
    if (data.toString().trim() == "finish") {
        process.exit();
    }
})

process.on('exit', () => {process.stdout.write("\n" + "Programa Finalizado!" + "\n\n")} )
