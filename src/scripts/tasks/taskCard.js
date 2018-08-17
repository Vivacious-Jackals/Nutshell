// Grady R.
// this file builds an HTML representation of how the tasks are to be displayed on the DOM.
// needs to include a "check complete" button; boolean true/false allowing for filtering
// also be aware of event bubbling, verify event listener works on dynamically generated list item
console.log("taskCard.js")

const taskEntry = (item) => {
    return `
        <div class="taskEntry">
            <p class="task__name">
                Task Name: ${item.title}
            </p>
            <p>
            Task Description: ${item.content}
            </p>
            <p class="task__date">
                Event Date: ${item.date}
            </p>
            <button class="task__complete" id="task_complete--${item.id}">Click here when task complete</button>
            <button class="task__edit" id="edit--${item.id}">Click to Edit this task</button>
        </div>
    `
}

module.exports = taskEntry