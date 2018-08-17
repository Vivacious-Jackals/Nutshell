// author Grady R.
// this file should use an event listener to post the field values to the API
console.log("tasks.js")
const $ = require("jquery")
const TaskFormManager = require("./tasksForm")
const DataManager = require("./../dataManager")

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
        
        // POST to API
        DataManager.saveTask(newEntry)
        .then(() => {
            // Clear the form fields
            TaskFormManager.clearForm()
        })
    })
    
}

module.exports = taskFunction