const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === ''){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; /* use innerHTML to add the value of the input box to the li element */
        listContainer.appendChild(li); /* append is used to display the li element to the ul element */
        let span = document.createElement("span"); /* span element is a container for text */
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; /* clear the input box after adding the task */

}