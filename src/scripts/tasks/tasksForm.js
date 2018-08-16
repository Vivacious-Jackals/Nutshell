const TaskFormManager = Object.create(null, {
    renderTaskForm: {
        value: () => {
            return `
                <fieldset>
                    <label for="taskName">Task Name:</label>
                    <input required type="text" id="taskName">
                </fieldset>

                <fieldset>
                    <label for="expectedCompletionDate">Expected Completion Date: </label>
                    <input id="expectedCompletionDate"></textarea>
                </fieldset>

                <button id="completed">Click here when task is completed</button>
                
            `
        }
    }

})


module.exports = TaskFormManager