const sayMyName = () => console.log('Shelldon')
const runFunctions = fn => fn()
runFunctions(sayMyName)

runFunctions(() => console.log('Ryan'))

console.log(runFunctions(Math.random))