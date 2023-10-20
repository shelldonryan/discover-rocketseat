// callback hell
function op1(callback) {
    setTimeout(() => {
      const resultado = 'Resultado da op1';
      callback(resultado);
    }, 1000);
  } 
  
  function op2(resultadoOp1, callback) {
    setTimeout(() => {
      const resultado = `${resultadoOp1} + Resultado da op2`;
      callback(resultado);
    }, 1000);
  }
  
  function op3(resultadoOp2, callback) {
    setTimeout(() => {
      const resultado = `${resultadoOp2} + Resultado da op3`;
      callback(resultado);
    }, 1000);
  }
  
  console.log('Iniciando procedimento');
  
  op1(resultadoOp1 => {
    op2(resultadoOp1, resultadoOp2 => {
      op3(resultadoOp2, resultadoOp3 => {
        console.log(resultadoOp3);
      });
    });
  });

// promisse 
function op1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const resultado = 'Resultado da op1';
        resolve(resultado);
      }, 1000);
    });
  }
  
  function op2(resultadoOp1) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const resultado = `${resultadoOp1} + Resultado da op2`;
        resolve(resultado);
      }, 1000);
    });
  }
  
  function op3(resultadoOp2) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const resultado = `${resultadoOp2} + Resultado da op3`;
        resolve(resultado);
      }, 1000);
    });
  }
  
  console.log('Iniciando procedimento');
  
  op1()
    .then(resultadoOp1 => op2(resultadoOp1))
    .then(resultadoOp2 => op3(resultadoOp2))
    .then(resultadoOp3 => {
      console.log(resultadoOp3);
    })
    .catch(erro => {
      console.error(erro);
    });

/*

Neste exemplo, op1, op2 e op3 são funções que realizam operações assíncronas simuladas. Usando callbacks, 
a lógica de encadeamento pode se tornar complexa e difícil de ler conforme o número de operações aumenta.

Ao usar Promises, o código se torna mais claro e legível. Cada operação retorna uma Promise, o que permite 
encadear chamadas usando .then(). Além disso, o uso de .catch() permite tratar erros de forma mais eficiente.

Isso ilustra como as Promises ajudam a evitar o "callback hell" e tornam o código assíncrono mais fácil de ler 
e manter. Elas oferecem uma abstração mais poderosa e organizada para lidar com operações assíncronas em JavaScript.
*/

// https://www.youtube.com/watch?v=WUmAAxH9n-A (Curso de JavaScript Assíncrono - Callbacks, Promises & Async/Await)