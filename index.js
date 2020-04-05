const addForm = document.querySelector('.add')
const list = document.querySelector('ul')
const input = document.querySelector('.search input')

console.log(Array.from(list.children))

const generateTemplate = todo => {
  const listItem = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `
  list.innerHTML += listItem
}

addForm.addEventListener('submit', e => {
  e.preventDefault()

  const todo = addForm.add.value.trim()
  if (todo) {
    generateTemplate(todo)
    addForm.reset()
  }
})

list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove()
  }
})

const filterTodos = term => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'))

  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'))
}

input.addEventListener('keyup', () => {
  const term = input.value.trim().toLowerCase()
  filterTodos(term)
})