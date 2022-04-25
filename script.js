const addForm = document.querySelector('.addForm');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

//generate html list
const todoList = todo => {
  const HTML = `
  <li class="list-group-item d-flex align-items-center justify-content-between">
    <span>${todo}</span>
    <i class="fa-solid fa-trash-can delete"></i>
  </li>`;

  todos.innerHTML += HTML;

};

//add todo
addForm.addEventListener('submit', e => {
  e.preventDefault();
  let todo = addForm.add.value.trim();

  if (todo.length) {
    todoList(todo);
    addForm.reset();
  }

});

//delete event
todos.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }

});

//filter and add & delete class
const filterList = input => {

  Array.from(todos.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(input))
    .forEach(todo => todo.classList.add('filter'));

  Array.from(todos.children)
    .filter(todo => todo.textContent.toLowerCase().includes(input))
    .forEach(todo => todo.classList.remove('filter'));

};

//search keyup
search.addEventListener('keyup', _ => {
  console.log(search.value);
  const input = search.value.trim().toLowerCase();
  filterList(input);

});