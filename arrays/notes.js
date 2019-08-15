const notes = [
    { title: 'My Next Trip', body: 'Im going back to Cali' },
    { title: 'What I like to eat', body: 'pusseh pusseh pusseg' },
    { title: 'Number 1 Ranked', body: 'dembare' },
]

// notes.push('Note 4')
// console.log(notes.pop())

// console.log(notes.shift())
// notes.unshift('Note 0')

// notes.splice(1, 0, 'Note 1.5')

// notes[1] = 'Note 1.7'

// notes.forEach(function(item, index) {
//     console.log(item, index)
// })

// console.log(notes.length)
// console.log(notes)

// for (let count = 2; count >= 0; count--) {
//     console.log(count)
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }

//loop in reverse
// for (let count = notes.length-1; count >= 0; count--) {
//     console.log(notes[count])
// }

console.log(notes)
console.log(notes.length)

const index = notes.findIndex(function(note, index){
    console.log(note)
    return note.title === 'What I like to eat'
})

console.log(index)