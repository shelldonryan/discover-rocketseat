/* function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Unidade não constada')
    }
    
    // caminho ideal, F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahreinheit) => (fahreinheit - 32) * 5/9
    let degreeSign = 'C'

    // caminho relativo, C -> F
    if(celsiusExists) {updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => celsius * 9/5 +32
    degreeSign = 'F'
    }
    
    return formula(updateDegree).toFixed(1) + degreeSign
} 
try {
    console.log(transformDegree('2006C'))
    console.log(transformDegree('2006F'))
    transformDegree('30D')
} catch (error) {
    console.log(error.message)
} */


function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(fahrenheitExists && !celsiusExists) {
        let updateDegree = Number(degree.toUpperCase().replace("F", ""));
        let formula = (fahreinheit) => (fahreinheit - 32) * 5/9
        let degreeSign = 'C'
        return formula(updateDegree).toFixed(1) + degreeSign
    }

    if(celsiusExists && !fahrenheitExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'
        return formula(updateDegree).toFixed(1) + degreeSign
    } 
    
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Unidade não constada')
    }

   
} 
try {
    console.log(transformDegree('2006c'))
    console.log(transformDegree('2006F'))
    transformDegree('30D')
} catch (error) {
    console.log(error.message)
}


function transformDegree(degree) {
    let celsiusExists = degree.toUpperCase().includes('C')
    let fahrenheitExists = degree.toUpperCase().includes('F')

    let updateDegree
    if(celsiusExists && !fahrenheitExists) {
        updateDegree =  Number(degree.toUpperCase().replace('C', ''))
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'C'
        return formula(updateDegree).toFixed(1) + degreeSign
    } else if (!celsiusExists && fahrenheitExists) {
        updateDegree = Number(degree.toUpperCase().replace('F', ''))
        formula = (fahrenheit) => (fahrenheit - 32) * 5/9
        degreeSign = 'F'
        return formula(updateDegree).toFixed(1) + degreeSign
    } else {
        throw new Error('Unidade de temperatura não constada')
    }
}

try {
    console.log(transformDegree('1000F'))
    console.log(transformDegree('30C'))
    console.log(transformDegree('123q'))
} catch (error) {
    console.error(error.message)
}