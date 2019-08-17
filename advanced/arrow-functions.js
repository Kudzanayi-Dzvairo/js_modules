const square = () => num * num

const squareLong = () => {
    return num * num
}

const people = [
    {
        name: 'Kudzanayi',
        age: 1,
    },
    {
        name: 'Tamuka',
        age: 31,
    },
    {
        name: 'Dzvairo',
        age: 15,
    },
]

const under30 = people.filter(peeps => 30 > peeps.age)

const person = people.find(person => person.age === 31)

console.log(under30)
console.log(person)
