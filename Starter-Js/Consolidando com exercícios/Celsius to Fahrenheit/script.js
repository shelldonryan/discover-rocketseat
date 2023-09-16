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
    formula = (celsius) => celsius * 9/5 +32
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
