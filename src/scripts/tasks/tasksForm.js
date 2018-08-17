// author: Grady R.
// purpose:  Task Form builder, creates an Form whose field values should push to APIObject, 

console.log("tasksForm.js")

const TaskFormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#taskName").value = ""
            document.querySelector("#taskDescription").value = ""
            document.querySelector("#expectedCompletionDate").value = ""
        }
    },
    renderTaskForm: {
        value: () => {
            return `
                <fieldset>
                    <label for="taskName">Task Name:</label>
                    <input required type="text" id="taskName">
                </fieldset>

                <fieldset>
                    <label for="taskDescription">Task Description:</label>
                    <input required type="text" id="taskDescription">
                </fieldset>

                <fieldset>
                    <label for="expectedCompletionDate">Expected Completion Date: </label>
                    <input type="date" id="expectedCompletionDate"></textarea>
                </fieldset>

                <button id="completedTask">Click here to save this task to the API</button>
                
            `
        }
    }

})


module.exports = TaskFormManager



