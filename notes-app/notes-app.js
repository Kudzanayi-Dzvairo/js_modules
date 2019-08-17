const notes = [
    {
        title: 'my next trip',
        body: 'I would like to go to Spain',
    },
    {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better.',
    },
    {
        title: 'Office modification',
        body: 'Get a new seat',
    },
]

const filters = {
    searchText: '',
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title
            .toLowerCase()
            .includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(notes) {
        const noteEl = document.createElement('p')
        noteEl.textContent = notes.title
        document.querySelector('#notes').append(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'I was clicked'
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value)
})
