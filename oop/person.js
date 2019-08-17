const Person = function(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}`

    this.likes.forEach((like) =>{
        bio += ` ${this.firstName} likes ${like}`
    })
}

Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Kudzanayi', 'Dzvairo', 31, ['Sadza', 'Running'])
me.setName('Tamuka Dzvairo')
console.log(me.getBio())

const you = new Person('Don', 'King', 80, [])
console.log(you.getBio())
