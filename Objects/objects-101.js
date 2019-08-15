let myBook = {
    title: 'Power of One',
    author: 'Bryce Courtenay',
    pageCount: 400,
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Tandia'

console.log(`${myBook.title} by ${myBook.author}`)

let person = {
    name: 'Kudzanayi',
    age: 30,
    location: 'New York',
}
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age += 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
