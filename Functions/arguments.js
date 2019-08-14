let add = function(a, b, c) {
    return a + b
}

let result = add(10, 1, 5)
// console.log(result)

//Default arguments
let getScoreText = function(name = 'P1', score = 0) {
    return `Name: ${name} Score: ${score}`
}

let scoreText = getScoreText()
console.log(scoreText)

const payBill = function(total, tipPercent = 0.2) {
    return total + total * tipPercent
}

const check = payBill(100, 0.2)
console.log(check)
