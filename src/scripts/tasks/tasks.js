// author Grady R.
// this file should use an event listener to post the field values to the API
console.log("tasks.js")
const $ = require("jquery")
const TaskFormManager = require("./tasksForm")
const DataManager = require("./../dataManager")
const taskEntry = require("./../tasks/taskCard")

function taskFunction(){

    // grabs Grady's div; attaches the TaskForm for the user to complete
    document.querySelector("#taskContainer").innerHTML = TaskFormManager.renderTaskForm();
    
    
    // add event listener , grab <button id="completedTask"> from tasksForm.js then use POST command to post to API
    document.querySelector("#completedTask").addEventListener("click", () => {
        // Get form field values
        // Create object from them
        const newEntry = {
            title: document.querySelector("#taskName").value,
            content: document.querySelector("#taskDescription").value,
            date: document.querySelector("#expectedCompletionDate").value,
        }
        
        // POST to API .then render to DOM
        DataManager.saveTask(newEntry)
        .then(() => {
            // Clear the form fields
            TaskFormManager.clearForm()
        })
        .then(() => {
            // send the info into the DOM
            console.log(newEntry),
            // create A new "virtual" document fragment to contain components
            newDiv1 = document.createElement("div"),
            
            newDiv1.innerHTML = taskEntry(newEntry)
            
            document.querySelector("#taskContainer").appendChild(newDiv1)
        })
    })
    
}

module.exports = taskFunction