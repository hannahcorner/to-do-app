function onReady() {
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the text
    let title = NEW_TODO_TEXT.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //delete li
    let deleteBTN = document.createElement('button');
    deleteBTN.textContent = "Delete";

    deleteBTN.addEventListener('click', function(event){
      //console.log(event);
      //this.parentElement
      TODO_LIST.removeChild(this.parentElement);
    })

    //set the title
    newLi.textContent = title;

    //attach the checkboxto the li
    newLi.appendChild(checkbox);

    newLi.appendChild(deleteBTN);

    //attach the li to the new ul
    TODO_LIST.appendChild(newLi);

    //empty the input
    newToDoText.value='';
  });
}

window.onload = function() {
  onReady();
};
