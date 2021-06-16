const section = document.querySelector('.todo-section');
const submitBtn = document.querySelector('#submit');
const todoListi = document.querySelector('#todo-list');


const todoList = () =>{

    let storedTodos = [];
    let todoID = 0;
    

    const createTodos = (x, y) =>{
        let todoObj = {
            title: x,
            description: y,
            /*project:'',
            checked: false,
            test: true*/
        }
        storedTodos.push(todoObj)
        addSingleTodo(todoObj);
    }

    const addSingleTodo = (x) =>{
        let todoDIV = document.createElement("DIV");
        todoDIV.classList.add("newTodos");
        todoDIV.classList.add("todoCard");

        todoListi.appendChild(todoDIV);
        let todoHTML = document.createElement('p');
        todoHTML.innerHTML = x.title;
        todoDIV.appendChild(todoHTML);

        let todoHTML2 = document.createElement('p');
        todoHTML2.innerHTML = x.description;

        todoDIV.appendChild(todoHTML2);

        let deleteBTN = document.createElement('button');
        deleteBTN.innerHTML = "X";
        deleteBTN.setAttribute('id', todoID);
        deleteBTN.classList.add("newTodos");
        deleteBTN.classList.add("todoDelete");
        todoDIV.appendChild(deleteBTN);
        deleteBTN.addEventListener('click', (e) =>{
            storedTodos.splice(e.target.id,1);
            todoListi.innerHTML = '';
            displayTodos();
        }) 
        todoID++;
    }

    const displayTodos = ()=>{
        todoID = 0;
        for(let i=0; i < storedTodos.length; i++){
            addSingleTodo(storedTodos[i])
        }
        
    }


    return{ storedTodos, createTodos};
}

let todo = todoList();



submitBtn.addEventListener('click', () =>{
    let todoInput = document.querySelector('#todoInput');
    let todoDescr = document.querySelector('#todoDesc');
    
    todo.createTodos(todoInput.value, todoDescr.value);
})