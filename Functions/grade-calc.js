const gradeCalculator = (studentScore, totalPossbileScore) => {
    let result = (studentScore / totalPossbileScore) * 100
    let letterGrade = ''

    if (result >= 90) {
        letterGrade = 'A'
    } else if (result >= 80) {
        letterGrade = 'B'
    } else if (result >= 70) {
        letterGrade = 'C'
    } else if (result >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `You got an ${letterGrade} ${result}%!`
}

let grade = gradeCalculator(56, 300)

console.log(grade)
