## Introdução
    
    Criado pela microsoft com objetivo de trazer um superset de tipagens pa o Js.
    
    JavaScript em sua origem não é uma linguagem fortemente tipada ou que te obriga a definir os tipos e por isso durante o desenvolvimento podem ser passados erros. Por exemplo uma variável que tinha como princípio armazenar string, acaba armazenando numbers, ainda no desenvolvimento podemos descobrir isso, ao contrário só descobriríamos ao rodar a aplicação.
    
    Tipagem é importante para manter a consistência da app e para que seja descobertos erros.
    
    Por que utilizar o typescript?
    
    - [ ]  Evita erros de lógica, por exemplo, você pode definir o tipo de dado que os parâmetros daquela função pode receber.
    - [ ]  Typescript te auxilia informando erros, antes mesmo de você executar o código.

## Verificação do tipo estático
    
```tsx
// first mistake
const username = {
    name: 'Rodrigo',
    dateOfBirth: '15-02-2006'
}

/*console.log(username.email)*/
console.log(username.name)

//second mistake
const user = "Shelldon"

/*user()*/
console.log(user)

// Third mistake
function sum(a: number, b: number) {
    return a + b
}

//sum (1, '1')
sum(1, 1)
```
    
## Compilação
    
```tsx
function ticketNumber(username: string | null, ticket: number) {
    console.log(`Hello ${username ?? 'Default User'}, your ticket number is ${ticket}. `)
}
```

Quando compilado para Js

```jsx
"use strict";
function ticketNumber(username, ticket) {
    console.log(`Hello ${username !== null && username !== void 0 ? username : 'Usuário Padrão'}, your ticket number is ${ticket}. `);
}
```

> `void 0` é equivalente ao `undefined` . O `?` equivale ao `if` e o `:` equivale ao `else`.
> 
    
## Tipagem Explícita
    
Nós especificamos qual será o tipo de cada variável. O TypeScript nos ajuda a identificar cada tipo de variável ao invocá-las. `user: string`, `ticket: number`;

```tsx
**function ticketNumber(username: string, ticket: number) {
    console.log(`Hello ${username}, your ticket number is ${ticket}. `)
}

ticketNumber('shelldon', 123)

//[LOG]: "Hello shelldon, your ticket number is 123. "**
```

Se você não falar o tipo, por padrão ela será `any` .

```tsx
function sum(a: any, b: any) {
    return a + b
}

console.log(sum(1, 2))
console.log(sum("1", 2))
```

### Inferência de Tipos

É uma poderosa característica que permite o Ts automaticamente definir o tipo de dado de uma variável baseado no seu valor inicial.

```tsx
let user = "Rodrigo";

user = 12

//[ERROR] Type 'number' is not assignable to type 'string'.
```

### Tipos Primitivos

```tsx
let loading: boolean;
loading = false;

let email: string;
email = "joao@email.com";

let price: number;
price = 10.50;
price = 10;
```

### Tipagem arrays / matrizes

```tsx
// First way
let numbers: number[];
numbers = [1,2,3,4,5,6];

// Second way
let users: Array<string>;
users = ['Rodrigo', 'João'];
```

### Tipagem Functions

Quando a função tem return ocorre o inference type, porém quando não há ela é do tipo `: void` .

```tsx
function showMessages(message: string):void {
    console.log(message)
}
```

### Union 

O Operador Union, representado pelo *pipe* `|` nos permite adicionar mais de um tipo na variável.

```tsx
function printUserId(id: number | string) {
    console.log(`O ID do usuário é ${id}.`)
}

printUserId(143412)
```
    
## Generics
    
O generic no TypeScript nos permite reutilizar uma determinada implementação de código, de forma tipada. Para representar um generic, nós declaramos ele dessa forma `<>`. Ele torna nosso código flexível, já que podemos escolher a tipagem no momento de declarar ou executar.

existem as convenções que podemos seguir:

`<S>` → Representando State 

`<T>` → Representando Type 

`<K>` → Representando Key 

`<V>` → Representando Value 

`<E>` → Representando Element

```tsx
function useState<T extends string | number = string>() {
    let state: T;

    function get() {
        return state
    }

    function set(newValue: T) {
        state = newValue
    }

    return { get, set }

}

let newState = useState()
newState.get()
newState.set(1231)
newState.set('Shelldon')
```
    
## Types
    
Para não ficar sempre repetindo os tipos para todas as variáveis podemos criar `Types` para cada uma delas.

```tsx
type IdType = string | number | undefined;

let userId: IdType;
let adminId: IdType;

userId = 1;
userId = '1';
userId = undefined;

adminId = 1;
adminId = '2';
adminId = undefined;
```

### Types Assertion

normalmente é utilizado quando o TypeScript não sabe qual é a tipagem em um determinado objeto. Para contornarmos isso, podemos criar um `type` informando quais são as propriedades desse objeto.

```tsx
type UserResponse = {
    id: number;
    name: string;
    avatar: string;
}

let userResponse = {} as UserResponse;
```

### Objetos

Para criar tipagens utilizando objetos é simples:

```tsx
type Point = {
    x: number;
    y: number;
}

function printCoord(points: Point) {
    console.log(`O eixo x equivale a ${points.x}`)
    console.log(`O eixo y equivale a ${points.y}`)
}

printCoord({x: 123, y: 232})

/* 
    [LOG]: "O eixo x equivale a 123" 
    [LOG]: "O eixo y equivale a 232"
*/
```

Podemos deixar uma propriedade opcional, basta apenas por uma `?` no final da prop.

```tsx
type User = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean;
}

let newUser: User = {
    name: "Shelldon",
    email: "shelldon@email.com",
    age: 17
}
```

### Inserção de tipos

podemos unir dois tipos e usar as suas propriedades dentro de um objeto.

```tsx
type User = {
    id: number,
    name: string,
}

type Char = {
    nickname: string,
    level: number
}

type PlayerInfo = User & Char;

let info: PlayerInfo = {
    id: 1,
    name: 'João Inácio',
    nickname: 'birobirobiro',
    level: 50
}
```

Outra maneira de criar tipagens no TypeScript é utilizando a `interface` .

```tsx
interface User {
    id: number
    name: string,
}

let newUser: User = {
    id: 1,
    name: "João"
}

function registerNewUser(newUser: User){
    newUser.id
    newUser.name
}
```

### Diferença entre type e interface

O objetivo de ambos serve para definir tipagens no TypeScript. O `type` é mais recomendado por ser mais simples, fácil de lidar com tipos primitivos, por ser mais flexível. Já as `interfaces` são utilizadas normalmente em criação de libs, para aqueles que gostam da programação orientada a objetos.

```tsx
type TUser = {
    id: number;
    name: string;
}

type TPayment = {
    method: string;
}

// Fazendo união com Type
type TAccount = TUser & TPayment

interface IUser {
    id: number;
    name: string;
}

interface IPayment {
    method: string;
}

// Fazendo união com interfaces
interface IAccount extends IUser, IPayment {}
```
