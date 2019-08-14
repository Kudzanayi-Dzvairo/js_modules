//Undefined for variable
let name

if (name === undefined) {
    console.log('please provide a name')
} else {
    console.log(name)
}
console.log(name)

//Undefined for function arguments
//Undefined as function return default value
let square = function(num) {
    console.log(num)
}

let result = square()
console.log(result)

//Null is assigned value 
let age = 37

age = null

console.log(age)
