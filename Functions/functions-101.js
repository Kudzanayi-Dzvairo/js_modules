let greetUser = function() {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function(num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value, otherValue)

let convertFarenheitToCelcius = function(num) {
    let celcius = ((num - 32) * 5) / 9
    console.log(celcius)
}

convertFarenheitToCelcius(68)