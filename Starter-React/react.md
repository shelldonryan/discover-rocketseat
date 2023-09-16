## Introdução
    
    React é uma biblioteca JavaScript para a criação de interfaces do usuário
    
    Pode usar ele para aplicações desktop, Web, Mobile (ios ou Android)
    
    Para termos uma estrtura base usaremos o vite, que é um ambiente de construção de aplicações front-end de código aberto.
    
    O Vite tem todos os recursos do CRA, mas com melhores implementações e recursos adicionais que o CRA não suporta, com isso o Vite acaba sendo até 10x mais rápido em comparação ao CRA.
    
    Criando o primeiro projeto com o Vite
    
    ```bash
    npm create vite@latest reactapp --template react
    ```
    
    Após rodar o comando acima, será exibido a tela para escolher o framework que deseja utilizar.
    
    Depois ele cria o projeto no node com o npm, e assim só é preciso rodá-lo com um `npm run dev` , claro antes deve ser dado um `npm i` para instalar os módulos do projeto
    
- Estrutura React
    
    Ao entrarmos em um projeto react deparamos com arquivos e diretórios, entre eles um html, que por sinal, por mais que quando chamamos a URL no browser carregue um front-end, nele há apenas uma estrutura básica de html, porém no body possui duas tags.
    
    ```html
    		<!--
    	  temos uma div com o id raiz, e um script linkando com um arquivo.jsx que está dentro do diretório src.
    		-->
    		<div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
    ```
    
    Chegando ao `main.jsx` nos deparamos com isso:
    
    ```jsx
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'
    import './index.css'
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
    ```
    
    Basicamente importamos módulos e renderizamos um arquivo chamado App dentro de uma tag com o ID “root”, no caso a div do arquivo.html anterior. Vale ressaltar que o react trabalha manipulando essa árvore hierarquizada presente no browser chamada de DOM. Um bom exemplo dela são os sites que acessamos, cada parte da página é uma hierarquia e o react trabalha manipulando tudo isso. Pais e Filhos.
    
    Esse app nada mais é que um arquivo.jsx que contém uma função que retorna um bloco de código html, no caso o que é mostrado na URL.
    
    No React é usado uma sintaxe que é denominada de JSX. Dentro dele encontramos funções que retornam conteúdo.html
    
    Arquivos.json que são os responsáveis pelas dependências do nosso projeto, também guarda versão, arquivo main, author, entre outras, é criado a partir que damos início a um projeto em node com o `npm init` . Dependências usamos o react para criar as interfaces e o react-DOM para manipular a árvore de elementos. A dependência de desenvolvimento no caso seria o vite, que traz a base pré-pronta para podermos utilizar.
    
    Vem também um .gitignore para ignorarmos pastas e arquivos indesejados, por exemplo o node_modules(pasta que contém os módulos necessários). 
    
    Temos também um diretório src que contém arquivos como os jsx que já discutimos, arquivos css com estilização do front-end,
    
    É importante lembrar que a function ela só pode retornar apenas uma tag. Então no caso, que é a maioria, se utilizarmos mais de uma tag html devemos transformá-las todas em filhos e deixar apenas uma pai. No caso a que será pai é conhecida como fragment. `<></>` . Serve para embrulhar todos os elementos.
    

## Componentização

Uma estratégia para poder reaproveitar código, fazer manutenção e deixar a aplicação organizada. É uma técnica moderna de desenvolvimento de interface, onde criamos um componente e reaproveitamos ele em toda a aplicação.

1. Crie uma pasta chamada components e crie outra dentro dela com o nome do componente que irá utilizar, um card por exemplo
2. Dentro dele você cria um style.css e um arquivo.jsx, dentro do arquivo.jsx importa o style.css
3. Importe no arquivo da home `import {nomeDaExport} 'caminhoDapasta'`

## Propriedades

Uma forma de deixar o componente dinâmico é usando o que chamamos de Propriedades. 

1. Atribua propriedades aos componentes dentro do seu html no jsx. Esse arquivo.html que me refiro é o da página que está importando o componente.
2. Depois passe como parâmetro para a função do componente `props` e depois substitua no html por `{props.nomeDaPropriedade}` .

##  Estado

Imagine que colocamos um evento dentro do input que pega cada caractere que digitamos e servindo como parâmetro de uma função esse valor seja atribuído a uma variável. É de se imaginar que se colocarmos essa variável em alguma tag, ela passe o nome para a interface. Pois bem, não funciona e é aí que entra o conceito de estado.

Ex dado:

```json
let nameNew = ''

  function handleChangename(name) {
    nameNew = name
  }

return (
    <div className='container'>
      <h1>Nome: {nameNew}</h1>
      <input 
      type="text" 
      onChange={e => handleChangename(e.target.value)}
      />
		</div>
```

Para usarmos o estado:

1. Importe-o com `import React, {useState} from 'react';`
2. Depois criamos a linha `const [armazenaOConteudo, setfunctionQueAtualizaOEstado] = useState()`

Então conteúdo muda, reflete diretamente na interface.

Lembrando 1º elemento é o conteúdo do estado e o 2º valor a função que atualiza esse conteúdo.

Inclusive podemos definir um valor inicial colocando ele como argumento do `useState('')` .

## Imutabilidade

O princípio de imutabilidade no React diz respeito à forma como os estados devem ser tratados nos componentes. Em vez de modificar diretamente o estado, o React incentiva que os estados sejam tratados como imutáveis. Isso significa que, uma vez que um estado é definido, ele não deve ser alterado diretamente. Em vez disso, sempre que você precisa modificar o estado, você cria uma nova cópia com as alterações desejadas.

Esse conceito lembra bastante o paradigma de programação funcional, onde criamos funções que nunca mudam seu retorno e mantém o mesmo estado, no caso sempre estão prontas para exercerem a mesma tarefa sem mudar seu resultado, apenas se o argumento recebido for diferente. 

Vale lembrar que a imutabilidade aqui se aplica, mas o stateless não, ou seja, quando realizarmos as funções novamente ela não cria uma adição e sim uma substituição.

Lembre-se o conteúdo não deve ser alterado, mas sim substituído.

## Key prop

Atenção para quando formos utilizar alguma estrutura de repetição para adicionar componentes.

<aside>
💡 Warning: Each child in a list should have a unique "key" prop.

</aside>

A partir disso devemos criar chaves nos nossos componentes que devem ser únicas. Inclusive se tiverem dois componentes com chave  iguais é alertado no console.

## Hooks

Tem um padrão de nome, começa geralemente com o ‘use’. Exemplo é o próprio `useState` ou o `useEffect` 

São funções que permite você ligar recursos de estados e ciclo de vida do react a partir de componentes totalmente funcionais.

Eles valorizam a programação funcional, tudo dentro do react é função, veio para substituir conceitos antigos onde se usavam classes.

## useEffect

Um hook bastante utilizado. Ele é executado assim que a nossa interface é renderizada.

```jsx
useEffect(() => {
    //corpo - as ações ou oq quero que execute
  }, [/* dependências*/])
```

Nessas dependências podemos colocar estados, e cada vez que o estado for utilizado o useEffect roda junto.

Também podemos usar o userEffect para consumir API’s. Lembrando que diferente de uma função não podemos atribuir o async a ele. Se quisermos utilizar sem problemas só criar o async function e chamar essa função dentro do useEffect.