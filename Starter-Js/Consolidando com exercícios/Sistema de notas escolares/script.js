function getScore(nota) {
    let A = nota >= 90 && nota <= 100
    let B = nota >= 80 && nota <= 89
    let C = nota >= 70 && nota <= 79
    let D = nota >= 60 && nota <= 69
    let F = nota >= 0  && nota <= 59

    let notaFinal;

    if(A) {
        notaFinal = 'A'
    } else if(B) {
        notaFinal = 'B'
    } else if(C) {
        notaFinal = 'C'
    } else if(D) {
        notaFinal = 'D'
    } else if(F) {
        notaFinal = 'F'
    } else {
        notaFinal = 'nota inválida'
    }
    return notaFinal
}


console.log(getScore(80))