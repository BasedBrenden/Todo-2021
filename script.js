const section = document.querySelector('.todo-section');
const submitBtn = document.querySelector('#submit');
const todoListi = document.querySelector('#todo-list');
const projectList = document.querySelector('.dropdownBTN');
let projectBtns = document.querySelectorAll('.project-a');


const todoList = () =>{

    let storedTodos = [];
    let todoID = 0;
    

    const createTodos = (x, y, z) =>{
        let todoObj = {
            title: x,
            description: y,
            project: z,
            checked: false,
            /*
            dueDate: '',
            priority: ''*/
        }
        storedTodos.push(todoObj)
        addSingleTodo(todoObj);
    }

    //Adds single todo to HTML file, will probably move this to be outside of the factory.
    const addSingleTodo = (x) =>{
        let todoDIV = document.createElement("DIV");
        todoDIV.classList.add("newTodos");
        todoDIV.classList.add("todoCard");
        todoListi.appendChild(todoDIV);

        let todoCheck = document.createElement('input');
        todoCheck.setAttribute('type','checkbox');
        todoDIV.appendChild(todoCheck);
        todoCheck.addEventListener('click', ()=>{
            if(x.checked == true){
                todoDIV.style.backgroundColor = 'white';
                todoDIV.style.textdecoration = 'none';
                x.checked = false;
            }else{
            todoDIV.style.backgroundColor = 'slategrey';
            todoDIV.style.textdecoration = 'line-through';
            x.checked = true;
            }
        })

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
    //loops addSingleTodo for each obj in the storedTodos array
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
    projectList.innerHTML = 'Select a Project'
    
    todo.createTodos(todoInput.value, todoDescr.value, projectList.innerHTML);
})

projectList.addEventListener('click', () =>{
    let dropdownList = document.querySelector('.dropdown-list');
    if(dropdownList.style.display =='block'){
        dropdownList.style.display = 'none';
    }else{
        dropdownList.style.display = 'block';
    }
    
})

projectBtns.forEach( function(btn){ 
    btn.addEventListener('click', (e)=>{
    projectList.innerHTML = e.target.id;
    let dropdownList = document.querySelector('.dropdown-list');
    dropdownList.style.display = 'none'
    })
})