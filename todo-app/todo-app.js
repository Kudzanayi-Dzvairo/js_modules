const todos = [
    {
        text: 'Order cat food',
        completed: false,
    },
    {
        text: 'Clean kitchen',
        completed: true,
    },
    {
        text: 'Buy food',
        completed: true,
    },
    {
        text: 'Do work',
        completed: false,
    },
    {
        text: 'Exercise',
        completed: true,
    },
]

const filters = {
    searchText: '',
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        return todo.text
            .toLowerCase()
            .includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').append(summary)

    filteredTodos.forEach(function(todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').append(p)
    })
}

renderTodos(todos, filters)

const completed = function(todo) {
    const completedTodos = todos.filter(function(todo) {
        return todo.completed
    })
    document.querySelector('#todos').innerHTML = ''

    completedTodos.forEach(function(todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').append(p)
    })
}

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({ text: e.target.elements.addTodo.value, completed: false })
    renderTodos(todos, filters)
    e.target.elements.addTodo.value = ''
})

document
    .querySelector('#hide-completed')
    .addEventListener('change', function(e) {
        if (e.target.checked) {
            completed()
        } else {
            renderTodos(todos, filters)
        }
    })

// console.log(filteredTodos)
// document.querySelector('#todos').innerHTML = ''

// filteredTodos.forEach(function(todos) {
//     const newEl = document.createElement('p')
//     newEl.textContent = todos.title
//     document.querySelector('#todos').append(newEl)
// })
