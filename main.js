const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const todoList = document.querySelector('.todo__list')
const saveData = () => {
    localStorage.setItem('data', todoList.innerHTML)

}
const showData = () => {
    todoList.innerHTML = localStorage.getItem('data')
}

const addTask = () => {
    input.value === '' ? alert('Вы не ввели задачу') : (()=> {
        let li=document.createElement('li')
        li.innerHTML = input.value
        todoList.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u2716'
        li.appendChild(span)
    })();

    input.value='' 
    saveData()
}

btn.addEventListener('click',  () => {
    addTask()
})
todoList.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
    
})
showData()