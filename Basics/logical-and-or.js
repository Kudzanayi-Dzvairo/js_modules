let temp = 65

//Logical And Operator -True if both sides are true. False otherwise
//Logical Or Operator - True if at least one side is true.False otherwise

// if (temp >= 60 && temp <= 90) {
//     console.log('It is pretty nice out')
// }

// if (temp <= 0 || temp >= 120) {
//     console.log('Do not go outside')
// }

let isGuestOneVegan = true
let isGuestTwoVegan = true

if (isGuestOneVegan === true && isGuestTwoVegan === true) {
    console.log('Vegan dishes only')
} else if (isGuestOneVegan === true || isGuestTwoVegan === true) {
    console.log('here are some vegan options')
} else {
    console.log('here is whatever')
}
