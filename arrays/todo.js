const todo = [
    'take a shit',
    'shower',
    'shave',
    'whip it like a slave',
    'whip whip it like a slave',
]


// todo.splice(2,1)
todo.push('take a piss and wash my hands')
todo.push('take a knee and thanks the man')
todo.push('then get back to the money')
// todo.shift()

todo.forEach(function(item, index ){
    console.log(`${index +1}. ${item}`)
})

// console.log(todo.length)
// console.log(`You have ${todo.length} todos!`)
// console.log(todo)
// console.log(todo[todo.length-2] )

for(let count = 0; count < todo, count ++){
    const num = count + 1
    const todo = todo[count]
    console.log(`${num} ${todo}`)
}