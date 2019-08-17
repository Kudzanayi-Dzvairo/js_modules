const myFunction = () => {
    const message = 'This is my message'
    const printMessage = () => {
        console.log(message)
    }
    return printMessage
}

myFunction()