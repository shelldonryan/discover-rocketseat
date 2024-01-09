const time_out = 4000

const finished = () => {
    console.log('finished')
}

const timer = setTimeout(finished, time_out)
clearTimeout(timer)
