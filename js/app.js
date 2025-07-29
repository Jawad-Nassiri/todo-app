const $ = document
const openModalBtn = $.querySelector('.open-modal-button')
const modalScreenElem = $.querySelector('.modal-screen')
const modalElem = $.querySelector('.modal')
const closeModalX = $.querySelector('.close-modal-x')
const cancelBtn = $.querySelector('.cancel')
const createTaskBtn = $.querySelector('.create')
const inputElem = $.querySelector('.input')
const todosContainer = $.querySelector('.todos-container')
const deleteTaskBtn = $.querySelector('.todos-container')




openModalBtn.addEventListener('click', openModal)
closeModalX.addEventListener('click', closeModal)
cancelBtn.addEventListener('click', closeModal)
createTaskBtn.addEventListener('click', createNewTask)


function openModal() {
  modalScreenElem.classList.remove('hidden')
}

function closeModal() {
  modalScreenElem.classList.add('hidden')
}

$.addEventListener('keydown', (event) => {
  if(event.key === "Escape") {
    closeModal()
  }
})

$.addEventListener('click', (event) => {
  if(!modalElem.contains(event.target) && !openModalBtn.contains(event.target)) {
    closeModal()
  }

  if(event.target.classList.contains('delete')) {
    const taskElem = event.target.closest('article')
    taskElem.remove()
  }
})

function createNewTask() {
  let taskValue = inputElem.value;

  todosContainer.insertAdjacentHTML('beforeend', 
    `
      <article class="todo">
        <div class="todo-data">
          <p>${taskValue}</p>
          <div class="todo-buttons">
            <button class="delete">Delete</button>
          </div>
        </div>
      </article>

    `
  )

  inputElem.value = ""
  closeModal()
}
