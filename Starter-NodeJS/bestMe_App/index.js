// const questions = [
//     'O que aprendi hoje?',
//     'O que me deixou aborrecido? E o que eu poderia fazer para melhorar?',
//     'O que me deixou feliz hoje?',
//     'Quantas pessoas ajudei hoje?',
// ]

// const ask = (index = 0) => {
//     process.stdout.write('\n\n' + questions[index] + " > ")
// }

// ask()

// const answers = []
// process.stdin.on('data', data => {
//     answers.push( data.toString().trim())
//     if (answers.length < questions.length) {
//         ask(answers.length)
//     } else {
//         process.exit()
//     }
// })

// process.on('exit', () => {
//     console.log(`
//         Como vai Shelldon?

//         O que você aprendeu hoje foi:
//         ${answers[0]}

//         O que te aborreceu e você poderia melhorar foi:
//         ${answers[1]}

//         O que te deixou feliz hoje foi:
//         ${answers[2]}

//         Você ajudou o total de ${answers[3]} pessoas hoje!

//         Bom trabalho, volte amanhã para sua nova jornada diária!!!
//         ` 
//     )
// })

const perguntas = [
    'Qual o Seu nome?',
    'Qual a sua idade?',
    'Qual o número da usa casa?',
    'Qual o nome da sua cidade?'
  ]
  
  const pergunta = (index = 0) => {
    process.stdout.write("\n\n" + perguntas[index])
  }
  
  pergunta()
  
  const respostas = []
  
  process.stdin.on('data', data => {
    respostas.push(data.toString().trim() + '\n')
    
    if (respostas.length < perguntas.length) {
      pergunta(respostas.length)
    } else {
      console.log(`Como vai Shelldon?

      O seu nome:
      ${respostas[0]}

      A sua idade:
      ${respostas[1]}

      O nmr da sua casa:
      ${respostas[2]}

      O nome da sua cidade: ${respostas[3]}!

      Bom trabalho, volte amanhã para sua nova jornada diária!!!
      `)
      process.exit()
    }
  })