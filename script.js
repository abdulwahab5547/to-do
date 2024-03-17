let todoInput = document.getElementById('todo-input-bar');
let addButton = document.getElementById('add-item-button');
let todoResult = document.getElementById('todo-result');
let i = 1;


// Make add button work using enter key
todoInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (todoInput.value.trim() !== '') {
            addButton.click();
        }
    }
});

// Make add button work with a click
addButton.addEventListener('click', function () {
    let inputValue = todoInput.value.trim();
    if (inputValue !== '') {
        todoOutput();
    }
});


function todoOutput(){

   let inputValue = todoInput.value;
   let item = document.createElement('li');
  
   item.innerHTML = '<i class="fa-solid fa-arrow-right"></i>' + ' ' + inputValue;
   i++;

   // Create the remove button
   let removeButton = document.createElement('button');
   removeButton.textContent = 'Remove';
   removeButton.addEventListener('click', function () {
       // Remove the entire <li> element when the remove button is clicked
       todoResult.removeChild(item);
   });


   // Create the check button
   let checkButton = document.createElement('button');
   checkButton.textContent = 'Check';
   checkButton.addEventListener('click', function () {
       // Toggle a class to visually indicate that the item is checked
       item.classList.toggle('checked');


       // Add or remove strikethrough effect based on the presence of the 'checked' class
       if (item.classList.contains('checked')) {
           item.style.textDecoration = 'line-through';
       } else {
           item.style.textDecoration = 'none';
       }
   });

   


   // Adding CSS classes
   removeButton.classList.add('remove-button');
   checkButton.classList.add('check-button');
  
   // Adding icons
   removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
   checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';


   // Moving to right
   removeButton.style.float = 'right';
   checkButton.style.float = 'right';


   // Append the buttons to the <li> element
   item.appendChild(removeButton);
   item.appendChild(checkButton);




   todoResult.appendChild(item);
  


   todoInput.value = '';
}


// Login settings

const toDoInterface = document.getElementById('to-do-interface');
const loginInterface = document.getElementById('login-interface');
const footer = document.getElementById('footer');

const loginPassword = 'letmein';

const loginInput = document.getElementById('login-input');
const loginInputButton = document.getElementById('login-input-button');

// With Click
loginInputButton.addEventListener('click', showToDo);

// With enter

loginInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (loginInput.value.trim() !== '') {
            showToDo();
        }
    }
});


function showToDo(){
    if (loginInput.value === loginPassword){
        toDoInterface.style.display = 'block';
        footer.style.display = 'block';
        loginInterface.style.display = 'none';
    }
    else {
        alert('Wrong password. Hint: letmein');
    }
}

