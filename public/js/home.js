

const taskInputContainer = document.querySelector('.add-task-input');

const showInputs = () => {
  taskInputContainer.style.display = "block";
}

const deleteTask = (id) => {
  fetch('/' + id,  {
    method: 'delete'
  }).then(resp => {
    if(resp.status == 200) {
      document.getElementById(id).remove();
    }
  }).catch(err => console.error(err));
 
}

function validateForm(event) {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let desc = document.getElementById("description").value;
  if(title == "") {
    alert("Empty Title");
    return false
  }
  if(desc == "") {
    alert("Empty Description")
    return false;
  }
  document.forms.AddTask.submit();
}