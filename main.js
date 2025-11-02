const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const todoList = document.querySelector('.todo__list')
const arrayToDo = JSON.parse(localStorage.getItem("todos")) || [];
const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(arrayToDo))
}
const createElemet = (tagName, innerHTML) => {
    const element = document.createElement(tagName);
    element.innerHTML = innerHTML;
    return element
}
const removeList = (index) =>{
    arrayToDo.splice(index, 1);
    saveData()
    render()
}
const addTask = () => {
    const text = input.value.trim()
    input.value === '' ? alert('Вы не ввели задачу') : (()=> {
        arrayToDo.push({text: text, 
            compl: false
        })
        todoList.innerHTML = ""; 
    })();
    input.value='' 
    saveData()
    render()
    
}
const render = () =>{
    todoList.innerHTML = "";
    arrayToDo.forEach((todo, index) =>{
        const li = createElemet('li', todo.text)
        if (todo.compl){
            li.classList.add("checked")
        }
        todoList.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u2716'
        li.addEventListener('click', (e) => {
            if(e.target.tagName === 'LI'){
                todo.compl = !todo.compl
                e.target.classList.toggle('checked')
                saveData()
                render()
            }
        })
        span.addEventListener("click", (e) =>{
            e.target.parentElement.remove()
            removeList(index)
            
        })
        li.appendChild(span) 
        todoList.appendChild(li)      
    })
}
render()
btn.addEventListener('click',  () => {
    addTask()
})
input.addEventListener("keydown", (e) =>{
    if (e.key === "Enter"){
        addTask()
    }
    
})
