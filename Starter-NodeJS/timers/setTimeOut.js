const timeOut = 4000
const timeIn = 2000

const start = () => console.log('Start!')
const finished = () => console.log("done!")

setTimeout(start, timeIn)
setTimeout(finished, timeOut)