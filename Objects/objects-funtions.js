let myBook = {
    title: 'Power of One',
    author: 'Bryce Courtenay',
    pageCount: 400,
}

let otherBook = {
    title: 'Bible',
    author: 'Jesus',
    pageCount: 1500,
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount}`,
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary)
console.log(otherBookSummary)
