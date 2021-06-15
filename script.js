const section = document.querySelector('.todo-section');
const submitBtn = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');

const todoList = () =>{

    let storedTodos = [];
    let todoID = 0;
    

    const createTodos = (x) =>{
        storedTodos.push(x);
        addSingleTodo(x);
    }

    const addSingleTodo = (x) =>{
        let todoDIV = document.createElement("DIV");
        todoDIV.classList.add("newTodos");
        todoDIV.classList.add("todoCard");

        todoList.appendChild(todoDIV);
        let todoHTML = document.createElement('p');
        todoHTML.innerHTML = x;
        todoDIV.appendChild(todoHTML);

        let deleteBTN = document.createElement('button');
        deleteBTN.innerHTML = "X";
        deleteBTN.setAttribute('id', todoID);
        deleteBTN.classList.add("newTodos");
        deleteBTN.classList.add("todoDelete");
        todoDIV.appendChild(deleteBTN);
        deleteBTN.addEventListener('click', (e) =>{
            
            
            storedTodos.splice(e.target.id,1);

            todoList.innerHTML = '';
            displayTodos();
        }) 
        todoID++;
    }

    const displayTodos = ()=>{
        todoID = 0;
        storedTodos.forEach( (x)=>{
            addSingleTodo(x);
        })
    }


    return{ createTodos};
}

let todo = todoList();



submitBtn.addEventListener('click', () =>{
    let todoInput = document.querySelector('#todoInput');
    
    todo.createTodos(todoInput.value);
})