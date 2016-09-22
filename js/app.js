//Get the list item of all the incomplete tasks
var incompleteTasks= document.getElementById("incomplete-tasks");
//Get the list item of all the complete tasks
var completeTasks= document.getElementById("completed-tasks");
//Get the list item of all the tasks
var taskAll= document.getElementsByTagName("li");

//A function to create a new list item
function createItem(newTaskString){
  //Create a new list item
  var addItem= document.createElement("li");
  //Creat all the elements inside the list item
  var addCheckBox= document.createElement("input");
  var addLabel= document.createElement("label");
  var addInput= document.createElement("input");
  var addEdit= document.createElement("button");
  var addDelete= document.createElement("button");
  //Modifying each element inside the list item
  addCheckBox.type= "checkbox";
  addLabel.innerText= newTaskString;
  addInput.type= "text";
  addEdit.className= "edit";
  addEdit.innerText= "Edit";
  addDelete.className= "delete";
  addDelete.innerText= "Delete";
  //Appending the elements
  addItem.appendChild(addCheckBox);
  addItem.appendChild(addLabel);
  addItem.appendChild(addInput);
  addItem.appendChild(addEdit);
  addItem.appendChild(addDelete);
  return addItem;
}

//A function to add the item to the incompleteTasks
function addEvent(){
  //Get the value from the new-task input
  var newTaskStringInput= document.getElementById("new-task");
  //create a new item
  var newItem= createItem(newTaskStringInput.value);
  //Append the item to incompleteTasks
  incompleteTasks.appendChild(newItem);
  //Add the bindEvent to the item
  bindEvent(newItem);
  //clear the new-task input
  newTaskStringInput.value="";
}

////Set the click handler to the addEvent function
document.getElementById("add-button").onclick= addEvent;

//A function to edit the task
function editEvent(){
  //Get the item which was cilcked
  var editItem= this.parentNode;
  var editLabel= editItem.querySelector("label");
  var editInput= editItem.querySelector("input[type=text]");
  //Switch from .editmode
  if(editItem.className==="editMode"){
    editLabel.innerText= editInput.value;
  }
  //Switch to .editMode
  else{
    editInput.value= editLabel.innerText;
  }
  //Toggle the editMode class
  editItem.classList.toggle("editMode");
}

//A function to delete the item
function deleteEvent(){
  this.parentNode.remove();
}

//A function to move the task between completeTasks and incompleteTasks
function taskHandler(){
  //Get the list of the item
  var taskBefore= this.parentNode.parentNode;
  //Move the item form the current list to another one
  if(taskBefore.id==="incomplete-tasks"){
    completeTasks.appendChild(this.parentNode);
  }else {
    incompleteTasks.appendChild(this.parentNode);
  }
}

//A function to bind the eventlistener to the list item
function bindEvent(listItem){
  listItem.querySelector("input[type=checkbox]").onchange= taskHandler;
  listItem.querySelector(".edit").onclick= editEvent;
  listItem.querySelector(".delete").onclick= deleteEvent;
}

//Cycle the whole task list and bind the eventlistener 
for(i=0; i<taskAll.length; i++){
  bindEvent(taskAll[i]);
}
























//var complete=document.getElementById("completed-tasks");
//var incomplete=document.getElementById("incomplete-tasks");
/*function createItem(item){
  var addItem= document.createElement("li");
  addItem.innerHTML=item.innerHTML;
  return addItem;
}

//Click the Edit button,run class "editMode"
function editInput(listItem){
  var taskEdit= listItem.getElementsByTagName("button")[0];
  var taskDelete= listItem.getElementsByTagName("button")[1];
  var taskCheckBox= listItem.getElementsByTagName("input")[0];
  taskEdit.onclick= function(){
    if(  listItem.className==="editMode"){
      listItem.removeAttribute("class");
    }else{
      listItem.className="editMode";
    }
    this.previousElementSibling.value=listItem.getElementsByTagName("label")[0].innerText;
  };
  taskDelete.onclick=function(){
    this.parentNode.remove();
  };
  //var checkBoxItem=createItem(listItem);
  taskCheckBox.onchange=function(){
console.log(complete);
      //if(this.checked){
      //  this.setAttribute("checked","");

        complete.appendChild=this.parentNode;
      console.log(complete);

      //}else{
        //this.removeAttribute("checked");
      //  incomplete.appendChild(this.parentNode);

      //}
      this.parentNode.remove();
  };

}

var list= document.getElementsByTagName("li");
for(i=0;i<list.length;i++){
  editInput(list[i]);
}//End loop
*/
//Click the Add Item Buttom, add task to the Todo list
/*
function addTask(newTask){
var lastItem=document.getElementById("incomplete-tasks").children[0];
console.log(lastItem.parentNode);
//var addItem= document.createElement("li");
//addItem.innerHTML=lastItem.innerHTML;
//createItem(lastItem).getElementsByTagName("label")[0].innerText=newTask;
lastItem.parentNode.appendChild(document.getElementById("incomplete-tasks").children[0]);
//console.log(document.getElementById("incomplete-tasks"));
//editInput(addItem);
}
var buttonAdd=document.getElementsByTagName("button")[0];
buttonAdd.onclick= function(){
  var inputTask= this.previousElementSibling;
  console.log(inputTask.value);
  addTask(inputTask.value);
  inputTask.value="";
};
*/
