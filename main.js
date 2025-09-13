const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const todoList = document.querySelector('.todo__list')

btn.addEventListener('click', function (){
    addTask()
})
function addTask(){
    if(input.value === ''){
        alert('Вы не ввели задачу')
    }
    else{
        let li=document.createElement('li')
        li.innerHTML = input.value
        todoList.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u2716'
        li.appendChild(span)
    }  
    input.value='' 
    saveData()
}
todoList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
    
})
function saveData(){
    localStorage.setItem('data', todoList.innerHTML)

}
function showData(){
    todoList.innerHTML = localStorage.getItem('data')
}
showData()