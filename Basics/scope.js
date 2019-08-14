//lexical scoping (static scope) - a variables availabiltiy is dependant on where it is defined

//Global Scope - defined outside all code blocks (varOne)
//Local Scope - defined inside a code block(varTwo)

//In a scope you can access variables defined in that scope or in any parent/ancestor

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
}

if(true){
    let varThree = 'varThree'

    if(true){
        let varFour = 'varFour'
    }
}

// console.log(varTwo)
