// author: Grady R.
// purpose:  Task Form builder, creates an Form whose field values should push to APIObject, 

console.log("tasksForm.js")

const TaskFormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#entryTitle").value = ""
            document.querySelector("#entryContent").value = ""
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
                    <label for="expectedCompletionDate">Expected Completion Date: </label>
                    <input type="date" id="expectedCompletionDate"></textarea>
                </fieldset>

                <button id="completed">Click here when task is completed</button>
                
            `
        }
    }

})


module.exports = TaskFormManager

