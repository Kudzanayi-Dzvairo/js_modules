let num = 103.41

// console.log(num.toFixed(2))

// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

let min = 10
let max = 20

//ranom formula 
//1) call math.random method
//2) subtract min from max and then add 1
//3)math.floor result 
// add min 
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// console.log()

function makeGuess(num){
    guess = Math.floor(Math.random() * (num - 1 + 1)) + 1
    console.log(guess)
    return num === guess
}

console.log(makeGuess(10))
