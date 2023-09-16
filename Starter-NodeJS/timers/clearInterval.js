const timeOut = 900
const checking = () => console.log("Check!")

const intervalrs = setInterval(checking, timeOut)
clearInterval(intervalrs)
